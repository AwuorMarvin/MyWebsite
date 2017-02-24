$(document).ready(function() {
            $('.nav li a').click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                  var targetOffset = $target.offset().top;
                  $('html,body').animate({scrollTop: targetOffset}, 1000);
                  return false;
                }
              }
            });
          });
/*
var hideDelay = true;
$('#myModal').on('hide.bs.modal', function(e) {
  if (hideDelay) {
    $('.modal-content').removeClass('animated zoomIn').addClass('animated zoomOut');
    hideDelay = false;
    setTimeout(function() {
      $('#myModal').modal('hide');
      $('.modal-content').removeClass('animated zoomOut').addClass('animated zoomIn');
    }, 700);
    return false;
  }
  hideDelay = true;
  return true;
});
/*
$("#myModal").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function (e) {
  if (e.originalEvent.animationName == "zoomOut") {
    $(".modal-backdrop").remove();
    $(".modal").remove();
  }
});

$('#myModal').on('hide.bs.modal', function (e) {
  $('#myModal').addClass('zoomOut');
  return e.preventDefault();
});

/*
// Smooth Scroll on clicking nav items
$('.nav li a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});

// back to top
$('#toTop a').click(function () {
  $('body').animate({
    scrollTop: 0
  }, 1000);
  return false;
});

// Parallaxing + add class active on scroll
$(document).scroll(function () {
  
  // parallaxing
  var $movebg = $(window).scrollTop() * -0.3;
  $('.portion').css('background-positionY', ($movebg) + 'px');

  // add class active to nav a on scroll
  var scrollPos = $(document).scrollTop() + 100;
  $('nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('nav a').removeClass("active");
      currLink.addClass("active");
    }
  });
  
  // changing padding of nav a on scroll
    if (scrollPos > 250) {
      $('nav a').addClass('small');
      $('nav img').addClass('move');
      $('nav span').removeClass('movetext');
    } else {
      $('nav a').removeClass('small');
      $('nav img').removeClass('move');
      $('nav span').addClass('movetext');
    }
  
});
*/