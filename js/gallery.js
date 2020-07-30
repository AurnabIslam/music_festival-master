(function($) {
  var $li = $('.img-list').find('> li'),
      $links = $li.find('> a'),
      $lightbox = $('.lightbox'),
      $next = $('.next'),
      $prev = $('.prev'),
      $overlay1 = $('.overlay1'),
      liIndex,
      targetImg;
  
  var imgSources = [
  '..//img/16.jpg',
  '..//img/15.jpg',
  '..//img/14.png',
  '..//img/1.png',
  '..//img/2.jpg',
  '..//img/3.jpg',
  '..//img/4.jpg',
  '..//img/5.jpg',
  '..//img/6.jpg',
  '..//img/7.jpg',
  '..//img/8.jpg',
  '..//img/9.jpg',
  '..//img/10.jpg',
  '..//img/11.jpg',
  '..//img/12.jpg', 
  '..//img/13.jpg'
  ];

  var imgs = [];
  for (var i = 0; i < imgSources.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = imgSources[i];
  }

  function replaceImg(src) {
    $lightbox.find('img').attr('src', src);
  }

  function getHref(index) {
    return $li.eq(index).find('>a').attr('href');
  }

  function closeLigtbox() {
    $lightbox.fadeOut();
  }

  $overlay1.click(closeLigtbox);

  $links.click(function(e) {
    e.preventDefault();
    targetImg = $(this).attr('href');
    liIndex = $(this).parent().index();
    replaceImg(targetImg);
    $lightbox.fadeIn();
  });

   $next.click( function() {  
    if ( (liIndex + 1) < $li.length ) { 
      targetImg = getHref(liIndex + 1);
      liIndex ++;
    } else {
      targetImg = getHref(0);
      liIndex = 0;
    }
    replaceImg(targetImg);
  });

   $prev.click( function() {  
    if ( (liIndex) > 0 ) { 
      targetImg = getHref(liIndex - 1);
      liIndex --;
    } else {
      targetImg = getHref($li.length - 1);
      liIndex = $li.length - 1;
    }
    replaceImg(targetImg);
  });
  
})(jQuery);