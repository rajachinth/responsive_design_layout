$(document).ready(function(){
    
    /*sticky navigation*/
    
    $('.js-waypoint').waypoint(function(direction){
        if(direction === 'down') {
             $('nav').addClass('sticky')
        }
        else {
            $('nav').removeClass('sticky')
        }
    },{
        offset:'100px'
    });
    
    /* scroll navigation */
    
     $('.jquery-btn-action').click(function(){
        $('html,body').animate({scrollTop:$('.jquery-login-action').offset().top-80 },1000);
    });
    $('.jquery-btn-hotlist').click(function(){
        $('html,body').animate({scrollTop:$('.jquery-action-home').offset().top-80 },1000);
    });
    $('.jquery-btn-signup').click(function(){
        $('html,body').animate({scrollTop:$('.jquery-action-signup').offset().top-100 },1000);
    });
    
    /* smooth href navigation */
    
    /* jQuery( "[attribute^='value']" ) */
    $('a[href^="#"]').on('click',function(event){
        var targetElement=$(this.getAttribute('href'));
        event.preventDefault();
        $('html,body').animate({scrollTop:$(targetElement).offset().top-100 },1000);  
    });
    
    /* toggle effect */
    
    $('.jquery-toggle-btn').click(function(){
        var navScreen= $('.jquery-toggle-screen');
        var closeIcon=$('.jquery-toggle-btn i');
        if(closeIcon.hasClass('ion-android-menu'))
            {
                closeIcon.removeClass('ion-android-menu');
                closeIcon.addClass('ion-android-close');
            }
        else {
                closeIcon.removeClass('ion-android-close');
                closeIcon.addClass('ion-android-menu');
        }
        navScreen.slideToggle(200);
    });
    
})
