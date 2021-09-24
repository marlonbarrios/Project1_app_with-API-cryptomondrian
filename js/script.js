const $form = $('form');
//click to refresh fetchData again
$form.on('submit', fetchData)

console.log("refreshed by clicking or reloading page");

function fetchData() {

  //api call from CoinGecko
  $.ajax({
      url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    }, 1000)
    .then(
      //"coin"  is an object 

      (data) => {


        //function to iterate over the array gat the indexes
        data.forEach(function (coin, idx) {
          //data showing in IDs...Ids are deployed all over the grid
          //Cryptocurrency name
          $(`#name-${idx} `).text(coin.id);
          //Cryptocurrency price
          $(`#price-${idx} `).html(coin.current_price);
         
        })

      },

      (error) => {
        console.log('bad request: ', error);
      });
}




// fetchData();
fetchData();


// Fade in and out machine
let fader = fadeInOut();
function fadeInOut() {
  for (let i = 0; i < 10; i++) {

    $(`#name-${i}`).fadeOut(300, function () {
      $(`#name-${i}`).fadeIn(3000);
    })
    $(`#price-${i}`).fadeOut(300, function () {
      $(`#price-${i}`).fadeIn(3000);

      console.log(i);
     
    })
  };

  return false;
};


//click to refresh and to fade out in/smoothing
$("input").click(function (fader) {

  // fetchData();
 
  return fader;

});


//Refreshes and fades in and out the values every minute
setInterval(() => {
  console.log("refreshed every 60 secs")
  fadeInOut();

  fetchData();
 
}, 60000);
