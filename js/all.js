
$(function (){
    var win = $(window);    
    // 當使用者滾動到離頂部 200px 時，展示回到最上層功能按鈕
    win.scroll(function (){
        if (win.scrollTop() > 200){    
            $(".goTopBtn").fadeIn(100);
        } else{    
            $(".goTopBtn").fadeOut(100);
        }    
    });
    // 回到最上層功能按鈕
    $(document).ready(function(){
        $('.goTopBtn').click(function(event){
            event.preventDefault();
            $('html, body').animate({
            scrollTop: 0}, 100);
        });
    });
});

$(document).ready(function(){
    // 產品頁點擊左上愛心呈現實心、空心
    $('.product>ul>li>.like').click(function(){
        $(this).toggleClass('ilike');    
    });
    //點擊漢堡選單時，<body>動態增加選擇器offcanvas
    $('.topmenu>.tm_hamburger').click(function(event){
        event.preventDefault();
        $('.topmenu ul').attr('class','rwdMenu');
        $('.animate__animated').addClass('animate__rotateIn');
    });
    //點擊topmenu li時，<body>動態移除選擇器offcanvas
    $('.topmenu>ul>li').click(function(){
        $('body').removeClass('offcanvas');
        $('.animate__animated').removeClass('animate__rotateIn');
    });
});



