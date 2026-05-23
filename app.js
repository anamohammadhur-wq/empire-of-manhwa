let coins = 3000;

function updateCoins() {
  const coinsElement = document.getElementById("coins");

  if (coinsElement) {
    coinsElement.innerText = coins;
  }
}

updateCoins();

/* إشعارات */

function showNotification(text) {
  alert(text);
}

/* موسيقى */

let music = new Audio(
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=beautiful-relaxing-music-14437.mp3"
);

music.loop = true;

let isPlaying = false;

function toggleMusic() {

  if (isPlaying) {

    music.pause();

    showNotification("🔇 تم إيقاف الموسيقى");

    isPlaying = false;

  } else {

    music.play();

    showNotification("🎵 تم تشغيل الموسيقى");

    isPlaying = true;

  }

}

/* مكافأة */

function dailyReward() {

  coins += 500;

  updateCoins();

  showNotification("🎁 حصلت على 500 عملة");

}

/* عجلة الحظ */

function spinWheel() {

  let reward = Math.floor(Math.random() * 1000);

  coins += reward;

  updateCoins();

  showNotification("🎡 ربحت " + reward + " عملة");

}

/* تسجيل الدخول */

function login() {

  let username = prompt("ادخل اسمك");

  if (username) {

    localStorage.setItem("username", username);

    showNotification("👑 أهلاً " + username);

  }

}

/* قراءة */

function readManhwa(name) {

  if (name === "Solo Leveling") {

    window.location.href = "solo.html";

  }

  else if (name === "Nano Machine") {

    window.location.href = "nano.html";

  }

  else {

    showNotification("📚 قريبًا");

  }

}
