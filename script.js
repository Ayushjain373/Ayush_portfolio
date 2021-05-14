$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY > 20)
        {
            $('.naavbar').addClass("sticky");

        }else{
            $('.naavbar').removeClass("sticky");
        }
        if(this.scrollY>500)
        {
            $('.scroll-up-button').addClass("show");
        }else{
            $('.scroll-up-button').removeClass("show");
        }

    })
    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop: 0});

    });

$('.menu-btn').click(function(){
    $('.navbr .menu').toggleclass("active");
    $('.menu-btn i').toggleclass("active");

})    
});