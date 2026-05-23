let coins = 2500;

function updateCoins(){
  document.getElementById("coins").innerText = coins;
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

function showNotification(text){

  const box = document.getElementById("notification");

  box.innerText = text;

  box.style.display = "block";

  setTimeout(()=>{

    box.style.display = "none";

  },3000);

}

updateCoins();