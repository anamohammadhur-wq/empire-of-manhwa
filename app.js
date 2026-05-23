let coins = localStorage.getItem("coins");

if (!coins) {
  coins = 2500;
}

coins = parseInt(coins);

const coinsElement = document.getElementById("coins");

function updateCoins() {
  coinsElement.innerText = coins;
  localStorage.setItem("coins", coins);
}

updateCoins();

function showNotification(text) {

  const notification =
    document.getElementById("notification");

  notification.innerText = text;

  notification.style.display = "block";

  setTimeout(() => {

    notification.style.display = "none";

  }, 3000);

}

function buyTheme(price) {

  if (coins >= price) {

    coins -= price;

    updateCoins();

    showNotification("🔥 تم الشراء بنجاح");

  } else {

    showNotification("❌ لا يوجد نقاط كافية");

  }

}

function dailyReward() {

  coins += 500;

  updateCoins();

  showNotification("🎁 حصلت على 500 نقطة");

}

function readManga(name) {

  showNotification("📖 جاري فتح " + name);

  const readerTitle =
    document.getElementById("reader-title");

  if (readerTitle) {

    readerTitle.innerText =
      "📖 " + name;

  }

  location.href = "#reader";

}

function toggleTheme() {

  document.body.classList.toggle("light-mode");

  showNotification("🌙 تم تغيير الثيم");

}

function playMusic() {

  const music =
    document.getElementById("bgmusic");

  music.play();

  showNotification("🎵 تم تشغيل الموسيقى");

}
showNotification("🎵 تم تشغيل الموسيقى");

}
