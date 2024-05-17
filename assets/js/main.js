$(document).ready(function () {
    //efcto scroll menu 
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //condition for window 
        if (scroll > 250) {
            $(".navbar").css("background", "#000");
            // $('body').css("background","")
        } else {
            $(".navbar").css("background", "transparent");
        }
    });

    //animaciones 

})