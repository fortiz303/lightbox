// 'use strict';

var images = ['basketball.jpg', 'basketball-smaller.jpg', 'basketball-court.jpg','basketball-court-thumbnail.jpg'];

$(document).ready(function(){

  // $('#basketball').click(function(){
  //
  //   $('#lightbox').css('height','100%');
  //   $('#lightbox').css('width','100%');
  //   $('#lightbox').css('background-color','grey');
  //   $('#lightbox').css('display','block');
  //
  //   console.log('hi');
  //
  // $('#lightbox').click(function(){
  //
  //   $('#lightbox').css('display','none');
  // })
  // })

  var image;

  for (let i = 0; i < images.length; i++) {

    var currentImage = images[i];
    // image = currentImage

    $('body').append("<img id ='image" +
     i +
      "' class='gallery' src ='images/" +
    currentImage +
     "'alt ='Image' />");

    $("#image" + i).click(function () {
      console.log('clicked' + i);

    });
  }


});
