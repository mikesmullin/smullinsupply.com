jQuery.noConflict();

function w(e, w, h, o) {
  if (!e) var e = window.event;
  window.open(e.href, '', w && h? 'width='+w+',height='+h+(o? ','+o : '') : (o? o : '')); 
  return false;
}

// Front Page Large Rotating Ad Banner
jQuery(function() {
  jQuery('#banner').cycle({
    fx:     'fade',
    timeout: 10000,
    pause:   1
  });
});