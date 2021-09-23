const $form = $('form');

$form.on('submit', fetchData)

function fetchData() {


    //next iterate with a forEach
   $.ajax({url:'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
       },1000)    
       .then(
         //coin = object
   
         (data) => { 
           console.log("fetched");
            data.forEach(function(coin, idx) {

             $(`#name-${idx} `).text(coin.id);
            
             $(`#price-${idx} `).text(coin.current_price);
            
            $(` #logo-${idx}`).html(`<p> <img class="image" src='${coin.image}'></p>`);
            })


           
            // data.forEach(function( onOff, idxe) {
  
            // $(`#name-${idxe} `).fadeOut( 500, function() {
            // $(`#name-${idxe} `).fadeIn( 2000 );


            // })

         },
        
         (error) => {
           console.log('bad request: ', error);
         });
       
   
   
       }
   
        fetchData();
   
   
        
        // $( "input" ).click(function() {
        //   $(`#name-${idx} `).fadeOut( 500, function() {
        //     $(`#name-${idx} `).fadeIn( 2000 );
            
        //   });
        //  return false;
        // });


        // $( "input" ).click(function() {
        //   $( "#price-0" ).fadeOut( 500, function() {
        //     $( "#price-0" ).fadeIn( 2000 );
        //   });
        //  return false;
        // });




       



  //  setInterval(() => {
  //   fetchData();
    
  //   $( "#name-0" ).fadeOut( 500, function() {
  //     $( "#name-0" ).fadeIn( 2000 );
  //   });
  //   $( "#price-0" ).fadeOut( 500, function() {
  //     $( "#price-0" ).fadeIn( 2000 );
  //   });

    
  // }, 10000);  

   
//     //  $(`#name-${idx} `).text(coin.id).click(function() {
//       $(`#name-${idx} `).text(coin.id);.first().fadeOut( "slow" );
// // });

   