$(document).ready(function () {
  // MODAL
  var modalText = {
    lenPlit: {
      title: "Len-plit.ru",
      tagRu: "ПРОИЗВОДСТВО ТРОТУАРНОЙ ПЛИТКИ.",
      detailRu:
        "Компания «len-plit» выполняет весь спект услуг, связанных с тротуарной плиткой. Сайт под ключ, написан на HTML, CSS, JavaScript .",
      tagEn: "PRODUCTION OF PAVING SLABS.",
      detailEn:
        "The company «len-plit» performs the entire spectrum of services related to paving slabs. Turnkey website, written in HTML, CSS, JavaScript.",
      link: "https://len-plit.ru",
    },
    istraStroi: {
      title: "Istra-stroi.ru",
      tagRu: "РЕМОНТ И ОТДЕЛКА.",
      detailRu:
        "Строительная компания «istra-stroi» осуществляет услуги по ремонту и отделке помещений. Сайт под ключ, написан на HTML, CSS, JavaScript.",
      tagEn: "REPAIR AND FINISHING.",
      detailEn:
        "The construction company «istra-stroi» provides services for the repair and decoration of premises. Turnkey website, written in HTML, CSS, JavaScript.",
      link: "https://istra-stroi.ru",
    },
    armKovka: {
      title: "Arm-kovka.ru",
      tagRu: "ИЗГОТОВЛЕНИЕ ХУДОЖЕСТВЕННОЙ КОВКИ.",
      detailRu:
        "Художественная ковка «Arm-kovka» исключительно ручная работа. Сайт под ключ, написан на HTML, CSS, JavaScript.",
      tagEn: "PRODUCTION OF ARTISTIC FORGING.",
      detailEn:
        "Artistic forging «Arm-kovka» is exclusively handmade. Turnkey website, written in HTML, CSS, JavaScript.",
      link: "https://arm-kovka.ru",
    },
    istraPlit: {
      title: "Istar-plit.ru",
      tagRu: "ПРОИЗВОДСТВО ТРОТУАРНОЙ ПЛИТКИ.",
      detailRu:
        "Компания «istra-plit» выполняет весь спект услуг, связанных с тротуарной плиткой. Сайт под ключ, написан на HTML, CSS, JavaScript.",
      tagEn: "PRODUCTION OF PAVING SLABS.",
      detailEn:
        "The company «istra-plit» performs the entire spectrum of services related to paving slabs. Turnkey website, written in HTML, CSS, JavaScript.",
      link: "https://istra-plit.ru",
    },
  };

  $("#gallery .button").on("click", function () {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function () {
    shiftSlide(-1);
  });
  $("#prev").click(function () {
    shiftSlide(1);
  });

  carousel.on("mousedown", function () {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function () {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);
    $(".modal").css("max-width", slideWidth);
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function () {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    let btnRu = document.querySelector("#btnRu").classList.contains("active2");
    $("#modal .title").text(modalText[id].title);
    if (btnRu) {
      $("#modal .detail").text(modalText[id].detailRu);
      $("#modal .tag").text(modalText[id].tagRu);
    } else {
      $("#modal .detail").text(modalText[id].detailEn);
      $("#modal .tag").text(modalText[id].tagEn);
    }

    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);

    $.each($("#modal li"), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($("#modal .slide"), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + "-" + index + ".jpg') center center/cover",
        backgroundSize: "cover",
      });
    });
  }
});
