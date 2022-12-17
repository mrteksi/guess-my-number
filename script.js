"use strict";
let gizliNumara = Math.trunc(Math.random() * 19) + 1; 
let puan = 20;
let highScore = 0;
const ekranMesaji = function (mesaj) {
  document.querySelector(".message").textContent = mesaj;
};
document.querySelector(".check").addEventListener("click", function () {
  const tahmin = Number(document.querySelector(".guess").value); // null
  console.log(tahmin, typeof tahmin);
  if (!tahmin) {
    // !null => true
    // Değer girilmediği durum
    ekranMesaji("Sayi Yok");
    // Oyuncunun kazandıgı yer
  } else if (tahmin === gizliNumara) {
    ekranMesaji("Doğru Sayi");
    document.querySelector(".number").textContent = gizliNumara;
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (puan > highScore) {
      highScore = puan;
      document.querySelector(".highscore").textContent = highScore;
    }
    // Tahmin yanlış olduğunda
  } else if (tahmin !== gizliNumara) {
    if (puan > 1) {
      ekranMesaji(tahmin > gizliNumara ? "Çok Yüksek" : "Çok Düşük");
      puan--;
      document.querySelector(".score").textContent = puan;
    } else {
      ekranMesaji("Oyunu Kaybettin");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.background = "red";
    }
  }
});
/// Başlangıç'a dönüş
document.querySelector(".again").addEventListener("click", function () {
  gizliNumara = Math.trunc(Math.random() * 19) + 1;
  puan = 20;
  ekranMesaji("Start Guessing");
  document.querySelector("body").style.background = "#222";
  document.querySelector(".score").style.width = "15rem";
  document.querySelector(".score").textContent = puan;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
