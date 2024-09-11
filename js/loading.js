window.addEventListener("load", function () {
    // 文字をアニメーションで順次表示
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('show');
        }, index * 100); // 文字ごとに100msの遅延を設定
    });

    // アニメーションが完了した後にメインコンテンツを表示
    setTimeout(() => {
        const content = document.getElementById("main-content");
        content.classList.remove("content-hidden");
        content.classList.add("content-visible");

        // ローディング文字列を完全に非表示に
        const loadingContainer = document.getElementById("loading-container");
        loadingContainer.classList.add("hidden");

        // コンテンツをフェードイン
        content.classList.add("loaded");
    }, letters.length * 100 + 500); // ローディング終了後のタイミング
});