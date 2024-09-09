// ボタン要素を取得
const scrollToTopBtn = document.querySelector('.scroll-to-top');

// ボタンがクリックされたときの処理
scrollToTopBtn.addEventListener('click', () => {
    // スムーズなスクロールアニメーション
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// スクロール位置に応じてボタンの表示/非表示を切り替える
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// 初期状態ではボタンを非表示にする
scrollToTopBtn.style.display = 'none';