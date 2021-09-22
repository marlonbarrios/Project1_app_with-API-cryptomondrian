const $form = $('form');

$form.on('submit', fetchData)

function fetchData() {
  console.log($form);


    //next iterate with a forEach
   $.ajax({url:'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
       },1000)    
       .then(
         //coin = object
   
         (data) => { 
           console.log("fetched");
            data.forEach(function(coin, idx) {
   // console.log(data);
   // console.log(coin);
   // console.log(idx);
   
   
             $(`#name-${idx} `).text(coin.id);
             
             $(`#price-${idx} `).text(coin.current_price);
            
            $(` #logo-${idx}`).html(`<p> <img class="image" src='${coin.image}'></p>`);
            })
           
            
         },
        
         (error) => {
           console.log('bad request: ', error);
         });
       
   
   
       }
   
        fetchData();
   
   
     // setInterval(() => {
     //   fetchData();
     // }, 60000);  
   