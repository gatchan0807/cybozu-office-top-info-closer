// トグル
let $info = $('.vr_topPageInfo');
$info.toggle();

// 閉じる・開く
$('<button class="cybozu-closer-toggle-button">お知らせを開く</button>').prependTo(
  '.toppagePartsAdd'
);

// 雑に実装
let toggleButton = document.querySelector('.cybozu-closer-toggle-button');

toggleButton.addEventListener('click', function() {
  $info.toggle();
  if (toggleButton.innerHTML === 'お知らせを開く') {
    toggleButton.innerHTML = 'お知らせを閉じる';
  } else {
    toggleButton.innerHTML = 'お知らせを開く';
  }
});
