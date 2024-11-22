const reports = [
    'めちゃくちゃ楽しかった！',
    '最高のイベントでした！',
    'また来年も参加したいです！',
    '友達と一緒に楽しみました！',
    '素晴らしいパフォーマンスでした！'
];

const liveReportArea = document.querySelector('.liveReport-Area');

reports.forEach(report => {
    const card = document.createElement('div');
    card.className = 'liveReport-card';
    card.textContent = report;
    liveReportArea.appendChild(card);
});