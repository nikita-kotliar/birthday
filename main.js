function перевіритиСлово() {
    var word = document.getElementById('word').value;
    var div = document.getElementById('answer');
    var div_h2 = document.getElementById('answer_h2');

    if (word.toUpperCase() === "ГОЛЬФ") {
        div_h2.innerHTML = "Horizontal Bar";
        div.className = "answer correct";
    } else {
        div_h2.innerHTML = "False";
        div.className = "answer incorrect";
    }

    // Показати блок відповіді
    div.style.display = 'block';
}