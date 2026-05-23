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

showNotification("🔥 تم الشراء بنجاح");

}else{

showNotification("❌ لا يوجد نقاط كافية");

}

}

function dailyReward(){

coins += 500;

updateCoins();

showNotification("🎁 حصلت على 500 نقطة");

}

function readManga(name){

document.getElementById("reader-title").innerText =
"📖 " + name;

window.location.href = "#reader";

showNotification("📚 تم فتح " + name);

}
