$(document).ready(function(){
     var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');

    $(".switch-btn").on("click", function(){
        if( $(".blade").hasClass("blade-off")){
          $(".onaudio").trigger("play"); 
       }else{
          $(".offaudio").trigger("play");
       }
       $(".blade").toggleClass("blade-off");
    });
});