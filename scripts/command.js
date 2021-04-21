var selectElem = document.getElementById('command-selector');
var advancement = document.getElementById('advancement');

selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;

    if (index === 0) {
        advancement.style.display = 'block';
    } else {
        advancement.style.display = 'none';
    }
})