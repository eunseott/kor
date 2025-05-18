$(function(){

    // 대한은행 객체 생성 리터럴 방식 권장사항
    const bank = {    // 선언과 속성: 값 설정, 메서드() 지정 => 속성과 속성, 메서드 구분은 쉼표로 분리한다.
        init(){
            this.header();   // 헤더 메서드() 실행
            this.section1(); // 섹션1 메서드() 실행
            this.section2(); // 섹션2 메서드() 실행
            this.footer();   // 푸터 메서드() 실행
            this.modal()     // 모달 메서드()  실행
        },
        header(){  // 메서드(함수)
            // 헤더영역 /////////////////////////////////////////////////////////////////////////////////////////////
            // 1. 메인버튼 마우스 오버 이벤트
            // 2. 메인버튼 초기화, this on 클래스 추가
            // 4. 서브메뉴 초기화 .slideUp(0) , this.next slideDown(300)
            // 6. 포커스이벤트(키보드이벤트 탭키)
            $('.main-btn').on({
                mouseenter(){
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(300);
                },
                focus(){
                    $('.main-btn').removeClass('on');
                    $(this).addClass('on');
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(300);
                },
            })

            // 3. gnb 영역 마우스가 떠나면 메인버튼 초기화
            // 5. gnb 영역 마우스가 떠나면 서브메뉴 초기화 부드럽게 300
            $('#gnb').on({
                mouseleave(){
                    $('.main-btn').removeClass('on');
                    $('.sub').stop().slideUp(300);
                }
            })

        },
        section1(){
            // 섹션1 영역 /////////////////////////////////////////////////////////////////////////////////////////////
                // 메인슬라이드 구현
                // 1. 카운트변수
                let cnt=0;
                // 2. 메인슬라이드함수
                function mainSlide(){
                    $('.slide-wrap').stop().animate({left: `${-100 * cnt}%`}, 600, function(){
                        if(cnt>=3){cnt=0}
                        $('.slide-wrap').stop().animate({left: `${-100 * cnt}%`}, 0);
                    });
                }

                // 3. 다음카운트함수
                function nextCount(){
                    cnt++;
                    mainSlide(); 
                }

                // 4. 셋인타발
                setInterval(nextCount,3000);


        },
        section2(){

            // 섹션2 영역 /////////////////////////////////////////////////////////////////////////////////////////////
            // 갤러리 버튼 클릭 이벤트
            $('.gallery-btn').on({
                click(){
                    // 갤러리버튼, 공지사항버튼, 갤러리 컨텐츠박스, 공지사항 컨텐츠박스
                    $('.tab-btn, .contents').addClass('on');
                }
            });

            // 공지사항 버튼 클릭 이벤트
            $('.notice-btn').on({
                click(){
                    // 갤러리버튼, 공지사항버튼, 갤러리 컨텐츠박스, 공지사항 컨텐츠박스
                    $('.tab-btn, .contents').removeClass('on');
                }
            });

            //  공지사항 공지글 클릭 이벤트 => 모달창 띄우기
            $('.modal-open').on({
                click(){
                    $('.modal').addClass('on');
                }
            })               
        },
        footer(){

        },
        modal(){
             //  모달 닫기 버튼 클릭 이벤트 => 모달창 닫기
             $('.close-btn').on({
                click(){
                    $('.modal').removeClass('on');
                }
            })
        }
    }
    
    bank.init();

});