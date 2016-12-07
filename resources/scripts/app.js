$(function() {
    'use strict';
    /*$('section .col').hover(function() { 
        var elem = $(this);
        $(elem[0]).css('background-image','linear-gradient(rgba(0, 0, 0,0),rgba(0,0,0,0)) , url(resources/css/img/pic01.jpg)' );
    });*/
    var in_delay = 0,out_delay= 0;
    $( "section .sec_bg_properties" )
      .mouseout(function() {
        var elem = $(this); 
        setTimeout(function(){
            $(elem[0]).css('background-image','linear-gradient(rgba('+$(elem).attr("rgb-val")+'),rgba('+$(elem).attr("rgb-val")+')) , url(resources/css/img/'+$(elem).attr("bg-pic")+')' );
         }, out_delay)
      })
      .mouseover(function() {
       var elem = $(this); 
        setTimeout(function(){
            $(elem[0]).css('background-image','linear-gradient(rgba(0, 0, 0,0),rgba(0,0,0,0)) , url(resources/css/img/'+$(elem).attr("bg-pic")+')' );
         }, in_delay)
        
  });
    $("header nav div").on("click",function() {
        $("#menu").addClass('fullWidth');  
        $('body').children().not('#menu').addClass("blur");    
    });
    $(".ion-close-round").on("click",function() {
        $("#menu").removeClass("fullWidth").addClass('noWidth'); 
        $('body').children().removeClass("blur");
    });
});

//linear-gradient(rgba(122, 63, 175, 0.67),rgba(122, 63, 175, 0.67)) ,url(img/pic02.jpg);