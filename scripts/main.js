var timeSensitive = false;
var inputs = document.getElementById('inputs')
var code = localStorage.getItem('code') ? JSON.parse(localStorage.getItem('code')) : [];

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
    // var letter = String.fromCharCode(97 + i);      

    var label = document.createElement("label")
    label.innerHTML = i;

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