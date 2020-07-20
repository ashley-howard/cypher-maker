var timeSensitive = false;
var inputs = document.getElementById('inputs')
var code = localStorage.getItem('code') ? JSON.parse(localStorage.getItem('code')) : [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function category(type) {
    var url;

    if (type == 'animals') {
        url = '/scripts/animalList.json'
    }
    else if (type == 'colours') {
        url = 'https://jonasjacek.github.io/colors/data.json'
    }

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {

            shuffleArray(data)

            for (i = 0; i < 36; i++) {
                var charPos = document.getElementById('char-' + i);

                if (type == 'colours') {
                    charPos.value = data[i].name
                }   else {
                    charPos.value = data[i];
                }
            }
        })
}

// function coder(input) {
//     input 
// }

// console.log(coder('hey there'))


// making sure that url hash starts with '#'
// e.g. website.com/#5fdsse35tg
if (window.location.href.indexOf('5fdsse35tg') > 0) {
    console.log('works')
}

for (var i = 0; i < 36; i++) {
    var letter = String.fromCharCode(97 + i);

    var label = document.createElement("label")
    if (i < 26) {
        label.innerHTML = letter;
    }
    else {
        label.innerHTML = i - 26;
    }


    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", 'char-' + i);

    inputs.appendChild(label);
    inputs.appendChild(input);
    inputs.appendChild(document.createElement("br"));
}

function submit() {
    if (localStorage.getItem('code')) {
        code = [];
    }
    for (var i = 0; i < 36; i++) {
        code.push(document.getElementById('char-' + i).value);
    }

    console.log(code)
    localStorage.setItem('code', JSON.stringify(code));
}

function reset() {
    localStorage.clear()
}

// if code is written in local storage, retrieve it and fill in inputs.

if (localStorage.getItem('code')) {
    for (var i = 0; i < 36; i++) {
        document.getElementById('char-' + i).value = JSON.parse(localStorage.getItem('code'))[i];
    }
}