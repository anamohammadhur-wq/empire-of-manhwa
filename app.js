let coins =
localStorage.getItem("coins") || 3000;

coins = parseInt(coins);

const coinsElement =
document.getElementById("coins");

const notification =
document.getElementById("notification");

updateCoins();

function updateCoins(){

coinsElement.innerText = coins;

localStorage.setItem("coins", coins);

}

function showNotification(text){

notification.innerText = text;

notification.style.display = "block";

setTimeout(()=>{

notification.style.display = "none";

},3000);

}

/* المكافأة */

function dailyReward(){

coins += 500;

updateCoins();

showNotification("🎁 حصلت على 500 عملة");

}

/* الموسيقى */

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

/* عجلة الحظ */

function spinWheel(){

let reward =
Math.floor(Math.random() * 1000);

coins += reward;

updateCoins();

showNotification("🎡 ربحت " + reward + " عملة!");

}

/* القراءة */

function readManhwa(name){

document.getElementById("reader-title")
.innerText =
"📖 جاري قراءة " + name;

window.location.href = "#reader";

showNotification("📚 تم فتح " + name);

}

/* تسجيل الدخول */

function login(){

let username =
prompt("ادخل اسم المستخدم");

if(username){

document.getElementById("username")
.innerText = username;

document.getElementById("profile-name")
.innerText = username;

localStorage.setItem("username", username);

showNotification("🔥 أهلاً " + username);

}

}

const savedUser =
localStorage.getItem("username");

if(savedUser){

document.getElementById("username")
.innerText = savedUser;

document.getElementById("profile-name")
.innerText = savedUser;

}

/* البحث */

function searchManhwa(){

let input =
document.getElementById("search")
.value.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card => {

let title =
card.querySelector("h3")
.innerText.toLowerCase();

if(title.includes(input)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

}

/* الثيمات */

function activateTheme(theme){

document.body.classList.remove("neon");
document.body.classList.remove("blood");

document.body.classList.add(theme);

showNotification("🎨 تم تفعيل الثيم");

}

/* التعليقات */

function addComment(){

let input =
document.getElementById("comment-input");

let text = input.value;

if(text.trim() !== ""){

let comment =
document.createElement("div");

comment.classList.add("comment");

comment.innerHTML =
"👑 " + text;

document
.getElementById("comments-container")
.prepend(comment);

input.value = "";

showNotification("💬 تم إضافة التعليق");

}

}

showNotification("🎡 ربحت " + reward + " عملة!");

}
