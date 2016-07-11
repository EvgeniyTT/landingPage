$(document).ready(function(){
    // slow move to selected section
    $(".navbar").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

    // change navbar color on scroll
    var scroll_start = 0;
    var startchange = $('#gift');
    var offset = startchange.offset();
    $(document).scroll(function() {
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $('.navbar').css('background-color', '#333');
        } else {
           $('.navbar').css('background-color', 'transparent');
        }
    });

});
