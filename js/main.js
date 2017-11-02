var imagesArray = ["background-image:url('img/redtop2.jpg');background-position: 50% 0%;-moz-background-position: center top;", "background-image:url('img/pink.jpg')","background-image:url('img/white.jpg')"];
//(these don't require the "../" because we'll be injecting these paths into HTML, not CSS)

var counterVar = 0;

setInterval(function() {
  if(counterVar >= imagesArray.length) {
    counterVar = 0
  };
  document.body.setAttribute("style", imagesArray[counterVar]);
	counterVar++;

}, 7000);
//(for a two-second timer)
