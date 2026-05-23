let coins = 3000;

function updateCoins() {
  const coinsElement = document.getElementById("coins");

  if (coinsElement) {
    coinsElement.innerText = coins;
  }
}

updateCoins();

function showNotification(text) {
  alert(text);
}

let music = new Audio(
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=beautiful-relaxing-music-14437.mp3"
);

music.loop = true;

let isPlaying = false;

function toggleMusic() {

  if (isPlaying) {

    music.pause();

    alert("🔇 تم إيقاف الموسيقى");

    isPlaying = false;

  } else {

    music.play();

    alert("🎵 تم تشغيل الموسيقى");

    isPlaying = true;

  }

}

function dailyReward() {

  coins += 500;

  updateCoins();

  alert("🎁 حصلت على 500 عملة");

}

function spinWheel() {

  let reward = Math.floor(Math.random() * 1000);

  coins += reward;

  updateCoins();

  alert("🎡 ربحت " + reward + " عملة");

}

function login() {

  let username = prompt("ادخل اسمك");

  if (username) {

    localStorage.setItem("username", username);

    alert("👑 أهلاً " + username);

  }

}

function readManhwa(name) {

  if (name === "Solo Leveling") {

    window.location.href = "solo.html";

  }

  else if (name === "Nano Machine") {

    window.location.href = "nano.html";

  }

  else {

    alert("📚 قريبًا");

  }

}
