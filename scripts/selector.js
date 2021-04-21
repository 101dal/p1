var selectElem = document.getElementById('command-selector');
var pElem = document.getElementById('command');

selectElem.addEventListener('change', function() {
    var index = selectElem.selectedIndex;
    var command = selectElem.options[selectElem.selectedIndex].value;
    console.log(index)
    pElem.innerHTML = 'Selected command: ' + command;
})