let coins = 3000;

const coinsElement =
document.getElementById("coins");

const notification =
document.getElementById("notification");

updateCoins();

function updateCoins(){

coinsElement.innerText = coins;

}

function showNotification(text){

notification.innerText = text;

notification.style.display = "block";

setTimeout(() => {

notification.style.display = "none";

},3000);

}

function dailyReward(){

coins += 500;

updateCoins();

showNotification("🎁 حصلت على 500 عملة");

}

function toggleMusic(){

showNotification("🎵 تم تشغيل الموسيقى");

}

function buyTheme(price){

if(coins >= price){

coins -= price;

updateCoins();

showNotification("🔥 تم الشراء بنجاح");

}else{

showNotification("❌ لا تملك عملات كافية");

}

}

function activateTheme(theme){

document.body.classList.remove("neon");
document.body.classList.remove("blood");

document.body.classList.add(theme);

showNotification("🎨 تم تغيير الثيم");

}

function readManhwa(name){

showNotification("📖 جاري فتح " + name);

window.location.href = "#reader";

}
