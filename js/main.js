/* main.js */
// console.log('test');

// 메인메뉴
$(function() {
    $('.depth1 > li').mouseover(function(){
        $('.depth2').addClass('show_menu');
        $('#depth2_bg').addClass('show_menu');
    });

    $('.depth1 > li').mouseout(function(){
        $('.depth2').removeClass('show_menu');
        $('#depth2_bg').removeClass('show_menu');
    });
});

//메인배너 슬라이더
$(function(){
    var count = 1; 

    setInterval(function(){
        console.log(count);
        if(count > 2) count = 0;
        $('.slider img').removeClass('show');
        $('.slider img')
            .eq(count)
            .addClass('show');
        count++;
    }, 5000);
}); 

//팝업창
$(function(){
    $('.popup').addClass('popshow');

    $('#btn_close').click(function(){
        $('.popup').removeClass('popshow');
    })
});