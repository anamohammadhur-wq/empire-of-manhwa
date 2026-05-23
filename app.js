let coins = 2500;

function updateCoins(){

document.getElementById("coins").innerText = coins;

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

showNotification("🔥 تم شراء المظهر");

}else{

showNotification("❌ لا يوجد نقاط كافية");

}

}

function dailyReward(){

coins += 500;

updateCoins();

showNotification("🎁 حصلت على 500 نقطة");

}

updateCoins();
