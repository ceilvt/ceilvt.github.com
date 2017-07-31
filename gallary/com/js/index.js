/**
 * Created by wendy on 2017/7/30.
 */
var gallaryData = [
    {"img":'com/img/list/1.jpg','title':'胡歌 X QQ阅读'},
    {"img":'com/img/list/2.jpg','title':'高圆圆 X 花店时间'},
    {"img":'com/img/list/3.jpg','title':'HNA贵宾室'},
    {"img":'com/img/list/4.jpg','title':'海航全球航线'},
    {"img":'com/img/list/5.jpg','title':'合众汽车品牌片'},
    {"img":'com/img/list/6.jpg','title':'腾讯新闻 芒种计划'},
    {"img":'com/img/list/7.jpg','title':'老庙黄金'},
    {"img":'com/img/list/8.jpg','title':'加州旅游局'},
    {"img":'com/img/list/9.jpg','title':'优衣库品牌片'},
    {"img":'com/img/list/10.jpg','title':'亚一珠宝'},
    {"img":'com/img/list/11.jpg','title':'浦发银行'},
    {"img":'com/img/list/12.jpg','title':'Qne-KEY'}
]
window.addEventListener('resize',initScreen);

//初始化屏幕
function initScreen(){

    $('html,body,.superContainer').css({'width':'100%','height':'100%'});
    $('.pages').fullpage.reBuild();
    if($(window).height() > $(window).width()){
        $(".tips").css('display','block');
    }else{
        $(".tips").css('display','none');
    }
    resize();
}
$(function(){

    var mySwiper = new Swiper('.swiper-container', {
        speed: 2000,
        autoplay:2000,
        effect:'fade',
        loop:true,
        onSlideChangeStart:function(a){
            $('.pagination span').removeClass('active');
            $('.pagination span').eq(a.realIndex).addClass('active');

        }
    });

    $('.pages').fullpage({
        anchors: ['home','gallery','about'],
        'navigation': true,
        'paddingTop':'1.8rem',
        'paddingBottom':'0.9rem',
        afterLoad:function(a,b){
            tabMenu(b-1);
        },
        onLeave:function(){
            $('.gallary li a').css({'background-image':''});
            curImg = -1;
        }
    });
    initScreen();
    $('.gallary li').each(function(a,b){
        $(b).append('<span>'+gallaryData[a].title+'</span>');
    })

    //---------end 初始化
    $('.menu li').on('click',function(){
        var index = $(this).index();
        tabMenu(index);
    });

    function tabMenu(index){
        $('.menu li').each(function(a,b){
            $(b).find('a img').attr('src',"com/img/"+a+"_0.png");
        });
        $('.menu li').eq(index).find('a img').attr('src',"com/img/"+index+"_1.png");
    }

    //-----------end 菜单栏事件
    var curImg = -1;
    $('.gallary li').mouseover(function(){
        tabImg($(this));
    });

    $('.gallary li').click(function(){
        tabImg($(this));
    });

    function tabImg(imgObj){
        var index = imgObj.index();
        if(curImg == index){
            return;
        }
        curImg = index;
        $('.gallary li a').css({'background-image':''});
        imgObj.find('a').css({
            'background-image':'url(com/img/list/'+(index+1)+'.jpg)',
            'background-size': 'contain',
            'background-repeat': 'no-repeat',
            'background-position': 'center center',
            'display':'none'
        });
        imgObj.find('a').fadeIn(500);
    }


});
