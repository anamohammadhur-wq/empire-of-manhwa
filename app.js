let coins = 3000;

/* العملات */

function updateCoins() {

  const coinsElement =
  document.getElementById("coins");

  if (coinsElement) {

    coinsElement.innerText = coins;

  }

}

updateCoins();

/* إشعارات */

function showNotification(text) {

  alert(text);

}

/* الموسيقى */

let music = new Audio(
"https://cdn.pixabay.com/audio/2022/10/25/audio_946f0eeb0f.mp3"
);

music.loop = true;

let isPlaying = false;

function toggleMusic() {

  if (isPlaying) {

    music.pause();

    showNotification("🔇 تم إيقاف الموسيقى");

    isPlaying = false;

  }

  else {

    music.play();

    showNotification("🎵 تم تشغيل الموسيقى");

    isPlaying = true;

  }

}

/* مكافأة يومية */

function dailyReward() {

  coins += 500;

  updateCoins();

  showNotification(
  "🎁 حصلت على 500 عملة"
  );

}

/* عجلة الحظ */

function spinWheel() {

  let reward =
  Math.floor(Math.random() * 1000);

  coins += reward;

  updateCoins();

  showNotification(
  "🎡 ربحت " + reward + " عملة"
  );

}

/* تسجيل الدخول */

function login() {

  let username =
  prompt("👑 ادخل اسمك");

  if (username) {

    localStorage.setItem(
    "username",
    username
    );

    showNotification(
    "🔥 أهلاً " + username
    );

  }

}

/* فتح صفحات المانهوات */

function readManhwa(name) {

  if (name === "Solo Leveling") {

    window.location.href =
    "solo.html";

  }

  else if (name === "Nano Machine") {

    window.location.href =
    "nano.html";

  }

  else if (name === "Favorites") {

    window.location.href =
    "favorites.html";

  }

  else if (name === "Profile") {

    window.location.href =
    "profile.html";

  }

  else {

    showNotification(
    "📚 قريبًا"
    );

  }

}

}
