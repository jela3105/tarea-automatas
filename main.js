    ///import info from info.json;
function showInfo(symbol, title, description) {
    document.getElementById('info-title').textContent = symbol + '. ' + title;
    document.getElementById('info-description').textContent = description;
    document.getElementById('info-box').style.display = 'block';
}
 