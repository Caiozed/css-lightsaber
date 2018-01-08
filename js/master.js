$(document).ready(function(){
    var on_sound = $(".onaudio");
    var off_sound = $(".offaudio");
    var bg = $("body");
    var btn = $(".switch-btn");
    var hole = $("#crystal-chamber");
    console.log(hole);
    on_sound.prop("volume", 0.1);
    off_sound.prop("volume", 0.1);
    $(".switch-btn").on("click", function(){
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
    });
    
    $("#red").on("click", function(){
        var blade =  $(".blade");
        btn.removeClass();
        btn.addClass("switch-btn red");
        hole.removeClass();
        hole.addClass("switch-ring red");
        bg.removeClass();
        bg.addClass("red-bg");
        blade.removeClass();
        blade.addClass("blade").addClass("red-blade");
    });
    
    $("#blue").on("click", function(){
        var blade =  $(".blade");
        btn.removeClass();
        btn.addClass("switch-btn blue");
        hole.removeClass();
        hole.addClass("switch-ring blue");
        bg.removeClass();
        bg.addClass("blue-bg");
        blade.removeClass();
        blade.addClass("blade").addClass("blue-blade");
    });
    
     $("#green").on("click", function(){
        var blade =  $(".blade");
        btn.removeClass();
        btn.addClass("switch-btn green");
        hole.removeClass();
        hole.addClass("switch-ring green");
        bg.removeClass();
        bg.addClass("green-bg");
        blade.removeClass();
        blade.addClass("blade").addClass("green-blade");
    });
    
     $("#yellow").on("click", function(){
        var blade =  $(".blade");
        btn.removeClass();
        btn.addClass("switch-btn yellow");
        hole.removeClass();
        hole.addClass("switch-ring yellow");
        bg.removeClass();
        bg.addClass("yellow-bg");
        blade.removeClass();
        blade.addClass("blade").addClass("yellow-blade");
    });
});