var selectElem = document.getElementById('command-selector');

function copy() {
    var copyText = document.querySelector("#output1");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector("#outputbutton").addEventListener("click", copy);


function advancementoutput() {
    var mode = document.getElementById('advancement-mode').value;
    document.getElementById('output1').value = '/advancement ' + mode;
}