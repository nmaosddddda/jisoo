/* 무조건 js는 document.ready를 써줘야함 */
$(document).ready(function(){

    console.log('테스트')

    //문서가 로딩된 이후 단 1번만 실행
    let scrolling = $(window).scrollTop()
    console.log(scrolling)

    /* 브라우저가 스크롤이 조금이라도 되면 
       header에 fixed라는 클래스를 추가
       맨 위로 올라가면 fixed라는 클래스를 삭제 */

    function scroll_chk(){ //함수를 선언 
        //scrolling이라는 변수에 현재 스크롤 된 값을 저장
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ //스크롤 값이 0보다 크면 
            $('header').addClass('fixed')
        }else{ //스크롤 값이 0이면 - 맨위로 스크롤  
            $('header').removeClass('fixed')
        }
    }//function scroll_chk

    scroll_chk() // 함수를 호출

    //브라우저가 스크롤을 할때마다 실행
    $(window).scroll(function(){
        scroll_chk()
    })

    /*
        .tour .list ul li 한테
        오버한 li에만 active 클래스 추가
        이전에 active를 가지고 있었던 li에서는 active 삭제
        --- 무조건 하나의 li에만  active

        --> 이전에 오버한 li는 알기 어려움 
        -- 모든 li에 있는 active 모두 삭제하고 
           오버한 li에만 다시 active 클래스 추가 
    */
   $('.tour .list ul li').on('mouseenter', function(){
    $('.tour .list ul li').removeClass('active')
    //수많은 li중에서 지금 오버한 li 한개
        $(this).addClass('active')
   })

   /*
        footer .family button.btn__open 를 클릭하면
        footer .family 에 open 클래스를 줘야함
        footer .family button.btn__close 를 클릭하면
        footer .family 에 open 클래스를 삭제함
   */
  $('footer .family button.btn__open').on('click', function(){
    $('footer .family').addClass('open')
    $('footer .family .list').slideDown()
  })
  $('footer .family button.btn__close').on('click', function(){
    $('footer .family').removeClass('open')
    $('footer .family .list').slideUp()
  })


})//$(document).ready