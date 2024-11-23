const reports = [
    'みなさんと楽しいキャンフェスを作り上げたいです!',
    'めちゃくちゃ楽しいです!',
    '謎解きがわからない🤦'
    
];

const liveReportArea = document.querySelector('.liveReport-Area');

reports.forEach(report => {
    const card = document.createElement('div');
    card.className = 'liveReport-card';
    card.textContent = report;
    liveReportArea.appendChild(card);
});