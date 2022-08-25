$(document).ready(function () {
    // 그래프 탭메뉴
    let graphButtonSet = $('.graph-button>button');
    let graphBox = $('.graph-main >div.tab-box');
    let graphMemo = $('div.tab-box>span');

    graphBox.eq(0).show();
    graphMemo.show();
    graphButtonSet.eq(0).addClass('button-focus');

    $.each(graphButtonSet, function (index) {
        $(this).click(function () {
            graphBox.hide();
            graphBox.eq(index).show();

            //그래프 버튼에는 포커스효과
            graphButtonSet.removeClass('button-focus');
            $(this).addClass('button-focus');
        });
    });





    // let visitorButton = $('.vm-visitor');
    // let visitorButtonP = $('.vm-visitor .personal');
    // let visitorButtonB = $('.vm-visitor .business');


    let visitorButtonSet = $('.vm-visitor>button');
    let vmListSet = $('.vm-list>ul');

    vmListSet.eq(0).show();
    visitorButtonSet.eq(0).addClass('on');


    $.each(visitorButtonSet, function (index) {
        $(this).click(function () {
            vmListSet.hide();
            vmListSet.eq(index).show();

            //버튼 포커스효과
            visitorButtonSet.removeClass('on');
            visitorButtonSet.eq(index).addClass('on');
        });
    });

    // $.each(visitorButton, function (index) {
    //     event.stopPropagation();

    //     let psnVisit = $('.psn-visit');
    //     let bsnVisit = $('.bsn-visit');

    //     psnVisit.addClass('on');
    //     visitorButtonP.addClass('on');



    //     $(this).click(function (event) {
    //         event.stopPropagation();

    //         let temp = $(this);

    //         if (temp != visitorButtonB) {

    //             let gogo = $(this);
    //             console.log(gogo);

    //             $('visitorButton>button').removeClass('on');
    //             visitorButtonB.addClass('on');
    //             psnVisit.removeClass('on');
    //             bsnVisit.addClass('on');


    //         } else {
    //             $('visitorButton>button').removeClass('on');
    //             visitorButtonP.addClass('on');
    //             psnVisit.addClass('on');
    //             bsnVisit.removeClass('on');

    //         }
    //         return
    //     })

    // });



    // 사이트목록펼치기

    let fsListButtonSet = $('.fn-family-site>button');
    let SiteList = $('.fn-family-site>ul.fs-list')

    $.each(fsListButtonSet, function (index) {
        $(this).click(function () {
            if (SiteList.eq(index).hasClass('on')) {
                SiteList.eq(index).removeClass('on')
            } else {
                SiteList.eq(index).addClass('on')
            }
        })
    })
});
















window.onload = function () {
    // 헤더메뉴
    let GNB = $('.gnb-list');
    let SUB = $('.submenu');
    let Ls = $('.line');
    let GNBH = $('.gnb-hidden');


    GNB.mouseenter(function () {
        SUB.css('visibility', 'visible');
        Ls.css('display', 'block');
        GNBH.css('display', 'block');
    });
    GNB.mouseleave(function () {
        SUB.css('visibility', 'hidden');
        Ls.css('display', 'none');
        GNBH.css('display', 'none');
    });







    new Swiper('.sw-search-banner', {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });
    new Swiper('.bt-swiper', {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });

    let swEvent = new Swiper('.sw-events', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swe-pg",
            clickable: true,
            type: 'fraction',
            currentClass: 'swe-pg-active',
        },
        navigation: {
            nextEl: ".swe-control-next",
            prevEl: ".swe-control-prev",
        }
    });

    let swePnp = $('.swe-control-pnp');
    swePnp.click(function () {
        let temp = $(this).hasClass('swe-play');

        if (temp != true) {
            $(this).addClass('swe-play');
            swEvent.autoplay.stop();
        } else {
            $(this).removeClass('swe-play');
            swEvent.autoplay.start();
        }
    });


    let swPromo = new Swiper('.sw-promo', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swp-pg",
            clickable: true,
            type: 'fraction',
            currentClass: 'swp-pg-active',
        },
        navigation: {
            nextEl: ".swp-control-next",
            prevEl: ".swp-control-prev",
        }
    });

    let swpPnp = $('.swp-control-pnp');
    swpPnp.click(function () {
        let temp = $(this).hasClass('swp-play');

        if (temp != true) {
            $(this).addClass('swp-play');
            swPromo.autoplay.stop();
        } else {
            $(this).removeClass('swp-play');
            swPromo.autoplay.start();
        }
    });

    // let langSubShow = function () {
    //     $('.lang-sub').css('display', 'block')
    // };

    // document.getElementsByClassName('lang-sub').onclick = langSubShow();

    //모르겟어 ㅠㅠ

}