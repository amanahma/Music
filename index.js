var numberOfButton = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfButton; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click', function(){
    soundPlay(this.id);
    buttonAnimation(this.id);
  });
}

document.addEventListener("keypress", function (event) {
  soundPlay(event.key);
  buttonAnimation(event.key);
});

function soundPlay(buttonId){
  switch (buttonId) {
    case "A":
      var crash = new Audio('./sounds/Cornel___Rithika___Ride_it___Kya_Yehi_Pyar_Hai__Jay_Sean___Kizomba_fusion(360p)(1).mp3');
      crash.play();
      break;
    case "M":
      var kickBass = new Audio('./sounds/Dilawara._2023__ringtone_download_links_in_👇(360p)(1).mp3');
      kickBass.play();
      break;
    case "a":
      var snare = new Audio('./sounds/labon_Ko_🖤lofi_WhatsApp_Status_✨🍂(1080p)~2(1).mp3');
      snare.play();
      break;
    case "N":
      var tom1 = new Audio('./sounds/what_are_you_waiting_for___✨💞___love_me_like_you_do💖__couples_WhatsApp_status_✨(480p)(1).mp3');
      tom1.play();
      break;
    case "AA":
      var tom2 = new Audio('./sounds/Jo_bhi_jitne_pal_jiyu___Whatsapp_status___Dil_ibadat_song💫✨(720p)~2(1).mp3');
      tom2.play();
      break;
    case "H":
      var tom3 = new Audio('./sounds/Rockstar_Ringtone___Rockstar_Remix_Ringtone____rockstar_bgm_ringtone___rockstar_ringtone_dj_remix(48k).mp3');
      tom3.play();
      break;
    case "m":
      var tom4 = new Audio('./sounds/alex_and_rus_instrumental_ringtone(48k).mp3');
      tom4.play();
      break;
    case "D":
      var openhat = new Audio('./sounds/Tu_Aaja_Tenu.mp3');
      openhat.play();
      break;  
    default:
      console.log(buttonId);
  }   
}
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("#" + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}