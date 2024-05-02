// SAĞ TIKLAMA ENGELLEME
var isNS = (navigator.appName == "Netscape") ? 1 : 0;
var EnableRightClick = 0;
if(isNS)
document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
function mischandler(){
if(EnableRightClick==1){ return true; }
else {return false; }
}
function mousehandler(e){
if(EnableRightClick==1){ return true; }
var myevent = (isNS) ? e : event;
var eventbutton = (isNS) ? myevent.which : myevent.button;
if((eventbutton==2)||(eventbutton==3)) return false;
}
function keyhandler(e) {
var myevent = (isNS) ? e : window.event;
if (myevent.keyCode==96)
EnableRightClick = 1;
return;
}
document.oncontextmenu = mischandler;
document.onkeypress = keyhandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;

// RGB BORDER EKLEME
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeBoxShadowColor() {
    var img = document.querySelector('.profile-card__img');
    var boxShadowColor = getRandomColor();
    img.style.boxShadow = '0px 8px 20px 0px ' + boxShadowColor + ', 0px 0px 0px 10px rgba(235, 51, 73, 0.6)';
  }
  
  // Renk değişimini belirli aralıklarla gerçekleştirmek için bir zamanlayıcı kullanalım
  setInterval(changeBoxShadowColor, 250); // Her 2 saniyede bir renk değiştirsin