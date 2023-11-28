$('.slider').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 5,
    focusOnSelect: true,
    initialSlide: 1,
    respondTo: 'min',
    prevArrow:"<img class='a-left control-c prev slick-prev' src='asset/reshot-icon-chevron-arrow-backward-circle-4CQNS58E3L.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='asset/reshot-icon-chevron-arrow-forward-circle-HL73ANZSEF.svg'>",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }]
    
  });

  

  $('.vertical-slider').slick({
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplayspeed: 2000,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='asset/reshot-icon-chevron-arrow-backward-circle-4CQNS58E3L.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='asset/reshot-icon-chevron-arrow-forward-circle-HL73ANZSEF.svg'>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });




