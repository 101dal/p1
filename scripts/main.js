//id du sélecteur
var selectElem = document.getElementById('command-selector');
//affichage de la sélection
var pElem = document.getElementById('command');


selectElem.addEventListener('change', function() {
    alert('I am John in an annoying alert!')
    //numéro de la sélection
    var index = selectElem.selectedIndex;
    //valeur de la sélection
    var command = selectElem.options[selectElem.selectedIndex].value;
    //affichage dans la console de index
    console.log(index)
    //modification de l'affichage de la sélection
    pElem.innerHTML = 'Selected command: ' + command;

    if (index===0) {
        
    }
})
