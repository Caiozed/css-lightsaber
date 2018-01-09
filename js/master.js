$(document).ready(function(){
    // Variables setup
    var on_sound = $(".onaudio");
    var off_sound = $(".offaudio");
    var bg = $("body");
    var btn = $(".switch-btn");
    var hole = $("#crystal-chamber");
    var text = $(".light-text");
    
    // Audio tag volume reduction
    on_sound.prop("volume", 0.1);
    off_sound.prop("volume", 0.1);
    
    // Blade interactable button 
    $(".switch-btn").on("click", function(){
        bladeSwitch();
    });
    
    // Change color of the elements to red
    $("#red").on("click", function(){
        changeBladeColor("red");
    });
    
    // Change color of the elements to blue
    $("#blue").on("click", function(){
       changeBladeColor("blue");
    });
    
    // Change color of the elements to green
    $("#green").on("click", function(){
       changeBladeColor("green");
    });
    
    // Change color of the elements to yellow
    $("#yellow").on("click", function(){
        changeBladeColor("yellow");
    });
    
    // Change color of the elements to some color
    function changeBladeColor(color){
        var blade =  $(".blade");
        btn.removeClass();
        btn.addClass("switch-btn "+color);
        hole.removeClass();
        hole.addClass("switch-ring "+color);
        bg.removeClass();
        bg.addClass(color+"-bg");
        text.removeClass();
        text.addClass("light-text "+color+"-text");
        blade.removeClass();
        blade.addClass("blade").addClass(color+"-blade");
    };
    
    // Blade on/off switch
    function bladeSwitch(){
        if($(".blade").hasClass("blade-off")){
          on_sound.trigger("play");
          hole.removeClass("crystal-off");
          btn.removeClass("crystal-off");
       }else{
          off_sound.trigger("play");
          hole.addClass("crystal-off");
          btn.addClass("crystal-off");
       }
       $(".blade").toggleClass("blade-off");
    }
});