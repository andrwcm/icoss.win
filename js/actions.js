$(document).ready(function() {
    $('.icoPhone').click(function(){
        $(this).removeClass("icoPhone"),
        $(this).addClass("icoCamera");
    });

    $('.icoCamera').click(function(){
        $(this).removeClass("icoCamera"),
        $(this).addClass("icoPhone");
    });
});