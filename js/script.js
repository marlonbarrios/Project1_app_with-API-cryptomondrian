const $form = $('form');
//click to refresh fetchData again
$form.on('submit', fetchData)


function fetchData() {

  //api call from CoinGecko
   $.ajax({url:'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
       },1000)    
       .then(
         //"coin"  is an object 
   
         (data) => { 
           console.log('fetched');

           //function to iterate over the array gat the indexes
            data.forEach(function(coin, idx) {
              //data showing in IDs...Ids are deployed all over the grid
             //Cryptocurrency name
              $(`#name-${idx} `).text(coin.id);
            //Cryptocurrency price
             $(`#price-${idx} `).html(coin.current_price);
            //  //Cryptocurrency logo/it is not used
            // $(` #logo-${idx}`).html(`<p> <img class="image" src='${coin.image}'></p>`);
            })

         },
        
         (error) => {
           console.log('bad request: ', error);
         });
       }
   
        fetchData();

       
        //click to refresh and to fade out in/smoothing
        $( "input" ).click(function() {
        for (let i=0; i < 10; i++) {
          console.log(i);
          $(`#name-${i}`).fadeOut( 1000, function() {
            $(`#name-${i}`).fadeIn( 3000); 
          })

          $(`#price-${i}`).fadeOut( 1000, function() {
            $(`#price-${i}`).fadeIn( 3000); 
          })
  
        };

       return false;
      });


//Refreshes and fades in and out the values every minute
     setInterval(() => {
        fetchData();  

        for (let i=0; i < 10; i++) {
          console.log(i);
          $(`#name-${i}`).fadeOut( 2000, function() {
            $(`#name-${i}`).fadeIn( 3000); 
          })

          $(`#price-${i}`).fadeOut( 2000, function() {
            $(`#price-${i}`).fadeIn( 3000); 
          })
  
        };

       return false;
      

      console.log("fetched");
    }, 60000);  


  


  

   

   