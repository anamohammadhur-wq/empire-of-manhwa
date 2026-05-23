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

document.getElementById("reader-title")
.innerText =
"📖 جاري قراءة " + name;

window.location.href = "#reader";

showNotification("📚 تم فتح " + name);

}

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
