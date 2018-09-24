document.addEventListener("DOMContentLoaded", function () {
    var totalAcc = 101;
    var friends = ['susie Q', 'james deen', 'mark ruffalo', 'ben stein', 'tom hanks']
    var locations = ['kitchen', 'stairwell', 'shed', 'bedroom,', 'study', 'bathroom', 'greenhouse', 'garage', 'lab', 'library']
    var weapons = ['hammer', 'anvil', 'axe', 'sword', 'knife', 'ocelot', 'pen', 'plate', 'mace', 'bow and arrow', 'antiballistic missile', 'boomerang', 'flamethrower', 'spear', 'mortar', 'tank', 'plague', 'lance', 'pike', 'tomahawk']



    for (var i = 0; i < totalAcc; i++) {
        var h3 = document.createElement('h3');
        var textnode = document.createTextNode("Accusation" + " " + i);
        h3.appendChild(textnode);
        body.appendChild(h3)
        h3.addEventListener('click', function () {
            alert('Accusation' + i + ': ' + 'I accuse ' + friends[i] + ' with the ' + weapons[i] + ' in the ' + locations[i] + '!')
        })
    }
});