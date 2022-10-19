$(document).ready(function () {
  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");

  modalClose.click(function () {
    $(".modal-wrap").hide();
  });

  modalWrap.click(function () {
    $(".modal-wrap").hide();
  });

  // header-top 에서 language
  let langButton = $(".langButton");
  let langSubPu = $(".lang-sub");
  let langPuArrow = $(".langButton>.pu-arrow");

  langButton.click(function (event) {
    event.preventDefault();

    if (langSubPu.hasClass("on")) {
      langSubPu.removeClass("on");
      langPuArrow.css("transform", "scaleY(1)");
    } else {
      langSubPu.addClass("on");
      langPuArrow.css("transform", "scaleY(-1)");
    }
  });

  // header-top 에서 partSite

  let partSiteButton = $(".partSite");
  let partSitePu = $(".part-site");
  let psPuArrow = $(".partSite>.pu-arrow");

  partSiteButton.click(function (event) {
    event.preventDefault();

    if (partSitePu.hasClass("on")) {
      partSitePu.removeClass("on");
      psPuArrow.css("transform", "scaleY(1)");
    } else {
      partSitePu.addClass("on");
      psPuArrow.css("transform", "scaleY(-1)");
    }
  });

  //팝업메뉴
  //팝업메뉴 팝업열기
  let togglePuButton = $(".toggle-menu");
  let togglePuWrap = $(".popup-wrap");
  let toggleOffButton = $(".pu-head>a");

  togglePuButton.click(function () {
    togglePuWrap.addClass("on");
  });
  //팝업메뉴 팝업닫기
  toggleOffButton.click(function () {
    togglePuWrap.removeClass("on");
  });

  //팝업내 메뉴선택
  let puMenuSet = $(".pu-menu>ul li");
  let puListSet = $(".pu-list");

  puMenuSet.eq(0).addClass("on");
  puListSet.eq(0).show();

  $.each(puMenuSet, function (index) {
    $(this).click(function () {
      puMenuSet.removeClass("on");
      puMenuSet.eq(index).addClass("on");

      puListSet.hide();
      puListSet.eq(index).show();
    });
  });

  // 그래프 탭메뉴
  let graphButtonSet = $(".graph-button>button");
  let graphBox = $(".graph-main >div.tab-box");
  let graphMemo = $("div.tab-box>span");

  graphBox.eq(0).show();
  graphMemo.show();
  graphButtonSet.eq(0).addClass("button-focus");

  $.each(graphButtonSet, function (index) {
    $(this).click(function () {
      graphBox.hide();
      graphBox.eq(index).show();

      //그래프 버튼에는 포커스효과
      graphButtonSet.removeClass("button-focus");
      $(this).addClass("button-focus");
    });
  });

  // let visitorButton = $('.vm-visitor');
  // let visitorButtonP = $('.vm-visitor .personal');
  // let visitorButtonB = $('.vm-visitor .business');

  let visitorButtonSet = $(".vm-visitor>button");
  let vmListSet = $(".vm-list>ul");

  vmListSet.eq(0).show();
  visitorButtonSet.eq(0).addClass("on");

  $.each(visitorButtonSet, function (index) {
    $(this).click(function () {
      vmListSet.hide();
      vmListSet.eq(index).show();

      //버튼 포커스효과
      visitorButtonSet.removeClass("on");
      visitorButtonSet.eq(index).addClass("on");
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

  // let fsList = $('.fn-family-site');
  let fsListButton = $(".fn-family-site>button");
  let SiteList = $(".fn-family-site>ul.fs-list");
  // let SiteName = $('.fs-list>li>a>span')
  let fsListPuArrow = $(".fn-family-site>button>.pu-arrow");

  $.each(fsListButton, function (index) {
    $(this).click(function (event) {
      if (SiteList.eq(index).hasClass("on")) {
        SiteList.eq(index).removeClass("on");
        fsListPuArrow.eq(index).css("transform", "scaleY(1)");
      } else {
        SiteList.eq(index).addClass("on");
        fsListPuArrow.eq(index).css("transform", "scaleY(-1)");
      }
    });
  });

  //사이트 클릭후 글자적용

  let fsListSet = $(".fs-list>li>a");
  let fsListSetTxt = $(".fs-list>li>a>span");
  let fsListBox = $(".fn-family-site>button>span");

  console.log(fsListSet);

  $.each(fsListSet, function (index) {
    $(this).click(function () {
      fsListSet.getElementsByTagName("span").innerHTML;
      getel;
    });
  });
  console.log(fsListSet.getElemement("span").innerHTML);
});

window.onload = function () {
  // 헤더메뉴
  let GNB = $(".gnb-menu>li");
  let SUB = $(".submenu");
  let Ls = $(".line");
  let GNBH = $(".gnb-hidden");

  $.each(GNB, function (index) {
    $(this).mouseenter(function () {
      SUB.addClass("visible");
      SUB.eq(index).css("background-color", "#f6f6f6");
      Ls.addClass("block");
      GNBH.addClass("block");
    });
    $(this).mouseleave(function () {
      SUB.removeClass("visible");
      SUB.css("background-color", "#fff");
      Ls.removeClass("block");
      GNBH.removeClass("block");
    });
  });

  new Swiper(".sw-search-banner", {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-sb-pgnt",
      type: "fraction",
    },
    navigation: {
      prevEl: ".sb-prev",
      nextEl: ".sb-next",
    },
  });
  new Swiper(".bt-swiper", {
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });

  let swEvent = new Swiper(".sw-events", {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swe-pg",
      clickable: true,
      type: "fraction",
      currentClass: "swe-pg-active",
    },
    navigation: {
      nextEl: ".swe-control-next",
      prevEl: ".swe-control-prev",
    },
  });

  let swePnp = $(".swe-control-pnp");
  swePnp.click(function () {
    let temp = $(this).hasClass("swe-play");

    if (temp != true) {
      $(this).addClass("swe-play");
      swEvent.autoplay.stop();
    } else {
      $(this).removeClass("swe-play");
      swEvent.autoplay.start();
    }
  });

  let swPromo = new Swiper(".sw-promo", {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swp-pg",
      clickable: true,
      type: "fraction",
      currentClass: "swp-pg-active",
    },
    navigation: {
      nextEl: ".swp-control-next",
      prevEl: ".swp-control-prev",
    },
  });

  let swpPnp = $(".swp-control-pnp");
  swpPnp.click(function () {
    let temp = $(this).hasClass("swp-play");

    if (temp != true) {
      $(this).addClass("swp-play");
      swPromo.autoplay.stop();
    } else {
      $(this).removeClass("swp-play");
      swPromo.autoplay.start();
    }
  });

  // let langSubShow = function () {
  //     $('.lang-sub').css('display', 'block')
  // };

  // document.getElementsByClassName('lang-sub').onclick = langSubShow();

  //모르겟어 ㅠㅠ
};
