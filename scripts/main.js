var timeSensitive = false;
var inputs = document.getElementById('inputs')

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

    if (i < 26) {
        var label = document.createElement("label")
        label.innerHTML = letter;

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", letter);

        inputs.appendChild(label);
        inputs.appendChild(input);
        inputs.appendChild(document.createElement("br"));
    }
    else {
        var label = document.createElement("label")
        label.innerHTML = i - 26;

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", i - 26);

        inputs.appendChild(label);
        inputs.appendChild(input);
        inputs.appendChild(document.createElement("br"));
    }
}

function submit() {

    var code = []

    // push the user's custom "code" with the input value (26 values)
    // include numbers 0-9  (10 values) = 36 altogether or 35 because 0 counts as 1?
    for (var i = 0; i < 36; i++) {
        // var letters = String.fromCharCode(97 + i);
        // letter[letters] = letters;
        code.push(document.getElementById(String.fromCharCode(97 + i)).value); // won't work until you have all 26 letters written out in html

    }
    console.log(code)
    // console.log(a)
}