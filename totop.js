function getAbsoluteElementPosition(element) {

  if (typeof element == "string")
    element = document.getElementById(element)
   
  if (!element) return { top:0,left:0 };


  var ref = document.querySelector('body');
  var marginTop = 0;
  if(marginTop = window.getComputedStyle(ref).marginTop){
    marginTop = parseInt(marginTop);
  }
 
  var y = 0;
  var x = 0;
  while (element.offsetParent) {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  }
  return {top:y+marginTop,left:x};
}


function totop(ms, to){
  Xo = scrollY;
  Xf = getAbsoluteElementPosition(to).top;
  V = (Xo - Xf ) / ( 0 - ms );
  T0 = new Date().getTime();
  At = 1;

  if(V == 0)
    return false;

  var i = setInterval( function(){ 
    var t = new Date().getTime() - T0;
    scrollTo(0, pos(t));
    if(t > ms) {
      clearInterval(i);
    }
  }, At);

  function pos(time){
    //var pos = Xo + V*time;
    //console.log(pos);
    //return pos;
    return Xo + V*time ;
  }
}
