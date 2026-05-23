/* العملات */

let coins =
localStorage.getItem("coins") || 3000;

coins = parseInt(coins);

const coinsElement =
document.getElementById("coins");

const notification =
document.getElementById("notification");

if(coinsElement){

updateCoins();

}

function updateCoins(){

coinsElement.innerText = coins;

localStorage.setItem("coins", coins);

}

/* الإشعارات */

function showNotification(text){

if(notification){

notification.innerText = text;

notification.style.display = "block";

setTimeout(()=>{

notification.style.display = "none";

},3000);

}else{

alert(text);

}

}

/* المكافأة اليومية */

function dailyReward(){

coins += 500;

updateCoins();

showNotification(
"🎁 حصلت على 500 عملة"
);

}

/* الموسيقى */

let music =
new Audio(
"https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=beautiful-relaxing-music-14437.mp3"
);

music.loop = true;

let isPlaying = false;

function toggleMusic(){

if(isPlaying){

music.pause();

showNotification(
"🔇 تم إيقاف الموسيقى"
);

isPlaying = false;

}else{

music.play();

showNotification(
"🎵 تم تشغيل الموسيقى"
);

isPlaying = true;

}

}

/* عجلة الحظ */

function spinWheel(){

let reward =
Math.floor(Math.random() * 1000);

coins += reward;

updateCoins();

showNotification(
"🎡 ربحت " + reward + " عملة!"
);

}

/* تسجيل الدخول */

function login(){

let username =
prompt("ادخل اسم المستخدم");

if(username){

document.getElementById("username")
.innerText = username;

let profileName =
document.getElementById("profile-name");

if(profileName){

profileName.innerText = username;

}

localStorage.setItem(
"username",
username
);

showNotification(
"🔥 أهلاً " + username
);

}

}

/* تسجيل الدخول من الصفحة */

function loginUser(){

let username =
document.getElementById(
"login-username"
).value;

let password =
document.getElementById(
"login-password"
).value;

if(username && password){

localStorage.setItem(
"username",
username
);

window.location.href =
"index.html";

}else{

alert("❌ املأ جميع الحقول");

}

}

/* تحميل المستخدم */

const savedUser =
localStorage.getItem("username");

if(savedUser){

let usernameText =
document.getElementById("username");

if(usernameText){

usernameText.innerText =
savedUser;

}

let profileName =
document.getElementById("profile-name");

if(profileName){

profileName.innerText =
savedUser;

}

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

document.body.classList.remove(
"neon"
);

document.body.classList.remove(
"blood"
);

document.body.classList.add(theme);

localStorage.setItem(
"theme",
theme
);

showNotification(
"🎨 تم تفعيل الثيم"
);

}

/* تحميل الثيم */

const savedTheme =
localStorage.getItem("theme");

if(savedTheme){

document.body.classList.add(
savedTheme
);

}

/* المفضلة */

let favorites =
JSON.parse(
localStorage.getItem("favorites")
)
|| [];

function addFavorite(name){

if(!favorites.includes(name)){

favorites.push(name);

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

showNotification(
"❤️ تمت إضافة " + name
);

}else{

showNotification(
"⚡ موجود بالفعل بالمفضلة"
);

}

}

/* صفحة المفضلة */

const favoritesContainer =
document.getElementById(
"favorites-container"
);

if(favoritesContainer){

favorites.forEach(item => {

favoritesContainer.innerHTML += `

<div class="card">

<div class="card-content">

<h3>${item}</h3>

<button onclick="readManhwa('${item}')">
📖 قراءة
</button>

</div>

</div>

`;

});

}

/* التعليقات */

function addComment(){

let input =
document.getElementById(
"comment-input"
);

let text = input.value;

if(text.trim() !== ""){

let comment =
document.createElement("div");

comment.classList.add("comment");

comment.innerHTML =
"👑 " + text;

document
.getElementById(
"comments-container"
)
.prepend(comment);

input.value = "";

showNotification(
"💬 تم إضافة التعليق"
);

}

}

/* القراءة */

function readManhwa(name){

if(name === "Solo Leveling"){

window.location.href =
"solo.html";

}
else if(name === "Nano Machine"){

window.location.href =
"nano.html";

}
else{

showNotification(
"📚 سيتم إضافة الصفحة قريبًا"
);

}

}

/* زر الصعود */

window.onscroll = function(){

const topBtn =
document.getElementById(
"topBtn"
);

if(topBtn){

if(
document.body.scrollTop > 300 ||
document.documentElement.scrollTop > 300
){

topBtn.style.display =
"block";

}else{

topBtn.style.display =
"none";

}

}

};

function scrollToTop(){

window.scrollTo({

top:0,
behavior:"smooth"

});

}
}

}
