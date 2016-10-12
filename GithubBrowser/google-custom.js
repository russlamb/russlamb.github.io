function gaInit() {
    $.getScript('//www.google-analytics.com/analytics.js'); // jQuery shortcut
    window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;
    ga('create', 'UA-62590784-1', 'auto');
  
    console.log("Initalized");
    return ga;
  };
  
  function gaTrack(path, title) {
    var track =  { page: path, title: title};
  
    ga = window.ga || gaInit();
  
    ga('set', track);
    ga('send', 'pageview');
  
    console.log("Tracked");
  };
  
  $("a").click(function(evt) {
  var path = evt.currentTarget.pathname + evt.currentTarget.hash;
  var title = evt.currentTarget.title || evt.currentTarget.text;
  gaTrack(path, title);
});