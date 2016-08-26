$('body').scrollTop(0);

setTimeout(function(){
  $('body').scrollTop(window.sessionStorage.getItem(location.href));
}, 2000);
$(document).on('scroll', function(){
  window.sessionStorage.setItem(location.href, $('body').scrollTop());
  console.log(window.sessionStorage)
});