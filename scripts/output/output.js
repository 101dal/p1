var selectElem = document.getElementById('command-selector');

function copy() {
    var copyText = document.querySelector("#output1");
    copyText.select();
    document.execCommand("copy");
    alert("Element copied")
}

document.querySelector("#outputbutton").addEventListener("click", copy);


function advancementoutput() {
    var mode = document.getElementById('advancement-mode').value;
    var player = document.getElementById('player').value;
    var literal = document.getElementById('literal').value;
    var advancementselect = document.getElementById('advancementselect').value;
    document.getElementById('output1').value = '/advancement ' + mode + ' ' + player + ' ' + literal + ' ' + advancementselect;
}