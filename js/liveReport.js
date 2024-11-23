const reports = [
    '画像で時計が出てきた時はとても焦りました😟',
    '真下さんの社会への繋げ方がとてもうまかった',
    '謎解きがわからない🤦'

];

const liveReportArea = document.querySelector('.liveReport-Area');

reports.forEach(report => {
    const card = document.createElement('div');
    card.className = 'liveReport-card';
    card.textContent = report;
    liveReportArea.appendChild(card);
});