// カウンターの初期化
let count = 0;

// 要素の取得
const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment-btn");

// ボタンクリックイベントの設定
incrementButton.addEventListener("click", function () {
  // カウントを増加
  count++;

  // 表示を更新
  counterDisplay.textContent = count;
});
