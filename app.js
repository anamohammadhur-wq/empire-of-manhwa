let music =
new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=beautiful-relaxing-music-14437.mp3");

music.loop = true;

let isPlaying = false;

function toggleMusic(){

if(isPlaying){

music.pause();

showNotification("🔇 تم إيقاف الموسيقى");

isPlaying = false;

}else{

music.play();

showNotification("🎵 تم تشغيل الموسيقى");

isPlaying = true;

}

}
