let coins = localStorage.getItem("coins");

if(!coins){
coins = 2500;
}

coins = parseInt(coins);

updateCoins();

function updateCoins(){

document.getElementById("coins").innerText = coins;

localStorage.setItem("coins", coins);

}

function showNotification(text){

const notification =
document.getElementById("notification");

notification.innerText = text;

notification.style.display = "block";

setTimeout(()=>{

notification.style.display = "none";

},3000);

}

function buyTheme(price){

if(coins >= price){

coins -= price;

updateCoins();

showNotification("🔥 تم شراء العنصر");

}else{

showNotification("❌ نقاط غير كافية");

}

}

function dailyReward(){

coins += 500;

updateCoins();

showNotification("🎁 حصلت على 500 نقطة");

}

function readManga(name){

document.getElementById("reader-title")
.innerText = "📖 " + name;

window.location.href = "#reader";

showNotification("📚 جاري فتح " + name);

}

function toggleTheme(){

document.body.classList.toggle("light-mode");

showNotification("🌙 تم تغيير الثيم");

}

function playMusic(){

const music =
document.getElementById("bgmusic");

music.play();

showNotification("🎵 تم تشغيل الموسيقى");

}
