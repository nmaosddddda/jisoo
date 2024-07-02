$(document).ready(function(){

    /* 브라우저 넓이가 1024px이하면 모바일 1024px이상이면 pc버전 */
    let pc_mobile //현재 상태가 pc인지 모바일인지를 저장
    let window_w //브라우저 넓이 저장 

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ /* 1024보다 크면 - pc면 */
             pc_mobile = 'pc'
        }else{ /* mobile이면 */
             pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }
    //처음에 로딩 됐을때 실행
    resize_chk()
    //브라우저가 리사이즈 될때마다 실행
    $(window).resize(function(){
        resize_chk()
    })

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 25000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },
    });
   

    /*
        일시정시 버튼을 클릭하면
        팝업은 일시정지가 되고
        일시정시 버튼은 숨김처리
        다시시작 버튼은 나타남
        
        다시시작 버튼을 클릭하면
        팝언은 재생되고
        다시시작 버튼은 숨김처리
        일시정시 버튼이 나타남
     */
     $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_play').show()
     })//btn_stop

     $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_stop').show()
     })//btn_play

/*
     페이지가 스크롤되면 header에 fixed 클래스를 추가
     다시 맨 위로 올라가면 header에 fixed 클래스 삭제 */

     let scrolling

     function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
     }//function

     //문서가 처음 로딩되었을때 1번 실행
     scroll_chk()

     $(window).scroll(function(){
        //브라우저를 스크롤 할때마다 실행
        scroll_chk()
     })//window.scroll

     /*
         메뉴에 마우스를 올리면 
         header에 menu_over라는 클래스를 추가
         마우스를 오버한 li에만 on 이라는 클래스를 추가 
         메뉴 : header .gnb .gnb_wrap ul.depth1 > li
         (이전에 오버했던 메뉴를 알기 어려움)
         ==> 모든 메뉴의 on클래스를 삭제했다가 오버한 내꺼만 on클래스 추가 
         --> 다른 메뉴(li)에 마우스를 오버하면 
             이전에 오버했던 메뉴의 on클래스 삭제
        -->  header에서 마우스를 아웃하면 그때 menu_over라는 클래스 삭제
             모든 메뉴에서 on클래스 삭제
    */

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(pc_mobile == 'pc'){ //pc일 경우에만 
            $('header').addClass('menu_over');
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on') //마우스를 오버한 li만 
        }//if
    })//on
    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){ //pc일 경우에만
            $('header').removeClass('menu_over');
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        }//if
    })

    $('header .gnb .gnb_open').on('click', function(){
        if(pc_mobile == 'mobile'){ //mobile일 경우에만
            $('header').addClass('mobile_open')
        }
    })
    $('header .gnb .gnb_close').on('click', function(){
        if(pc_mobile == 'mobile'){ //mobile일 경우에만
            $('header').removeClass('mobile_open')
        }
    })


    /* find_swiper */

    const find01_swiper = new Swiper('.find .tab .find01 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .tab .find01 .btn_wrap .next',
            prevEl: '.find .tab .find01 .btn_wrap .prve',
        },
    });//find_swiper

    const find02_swiper = new Swiper('.find .tab .find02 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.find .tab .find02 .btn_wrap .next',
            prevEl: '.find .tab .find02 .btn_wrap .prve',
        },
    });//find_swiper

})//document