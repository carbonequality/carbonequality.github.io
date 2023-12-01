$(document).ready(function() {
 
    $("a.scroll-to").click(function() {
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
       }, {
          duration: 500,
          easing: "swing"
       });
       return false;
    });

    $(".block1__btn").click(function() {
      $(".block1__info").addClass('show');
      $(".block1__btn").addClass('d-none');
      $(".close").addClass('d-block');
    });

    $(".close").click(function() {
      $(".block1__info").removeClass('show');
      $(".block1__btn").removeClass('d-none');
      $(".close").removeClass('d-block');
    });

    $(".scroll__top").on("click", function() {
      $("body").scrollTop(0);
    });

   $(window).scroll(function() {
   var height = $(window).scrollTop();
   
         /*Если сделали скролл на 100px задаём новый класс для header*/
      if(height > 100){
      $('.scroll__top').addClass('show');
      } else{
            /*Если меньше 100px удаляем класс для header*/
      $('.scroll__top').removeClass('show');
      }
   
   });

   $(".reg__complete--switch").click(function() {
      $(".reg__complete--switch").toggleClass('active');
      $(".complete__info").toggleClass('show');
      $(".checkbox-2").toggleClass('show');
    });

   $('input[name="radio"]').click(function(){
      var target = $('#block-' + $(this).val());
    
      $('.block-text').not(target).hide(0);
      target.fadeIn(500);
   });

   $(".card__btn--pay").click(function() {
      $(".card__info").addClass('hide');
      $(".card__code").addClass('show');
    });

   $(".connect__change--switch").click(function() {
      $(".connect__change--switch").toggleClass('active');
      $(".connect__info").toggleClass('show');
   });

   $(".ntf__checkbox--input").click(function() {
      $(".card__checkbox--sub").toggleClass('show');
   });

   $(".form__change button").click(function() {
      $(".reset").addClass('hide');
      $(".reset__complete").addClass('show');
   });
  
 });  