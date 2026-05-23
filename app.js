let coins = 3000;

function updateCoins() {

document.getElementById("coins").innerText = coins;

}

updateCoins();

function spinWheel() {

let reward = Math.floor(Math.random() * 1000);

coins += reward;

updateCoins();

alert("🎡 ربحت " + reward + " عملة");

}

function dailyReward() {

coins += 500;

updateCoins();

alert("🎁 حصلت على 500 عملة");

}

function login() {

let username = prompt("ادخل اسمك");

if(username){

alert("👑 أهلاً " + username);

}

}
