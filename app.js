let coins = 3000;

/* تحديث العملات */

function updateCoins() {

  const coinsElement =
  document.getElementById("coins");

  if (coinsElement) {

    coinsElement.innerText = coins;

  }

}

updateCoins();

/* الإشعارات */

function showNotification(text) {

  alert(text);

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

    const userElement =
    document.getElementById("username");

    if (userElement) {

      userElement.innerText =
      username;

    }

  }

}

/* قراءة المانهوا */

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
