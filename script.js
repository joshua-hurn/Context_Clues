for (var i = 0; i <= 100; i++) {
    var h3 = document.createElement('h3');
    var textnode = document.createTextNode("Accusation" + " " + i);
    h3.appendChild(textnode);
    document.body.appendChild(h3);
    var changeAlert = makeWords(i);
    h3.addEventListener('click', changeAlert);

    function makeWords(i) {
        var friends = ['Susie Q', 'James Deen', 'Mark Ruffalo', 'Ben Stein', 'Tom Hanks'];
        var weapons = ['hammer', 'anvil', 'axe', 'sword', 'knife', 'ocelot', 'pen', 'plate', 'mace', 'bow and arrow',
            'antiballistic missile', 'boomerang', 'flamethrower', 'spear', 'mortar', 'tank', 'plague', 'lance', 'pike', 'tomahawk'];
        var locations = ['kitchen', 'stairwell', 'shed', 'bedroom,', 'study', 'bathroom', 'greenhouse', 'garage', 'lab', 'library'];

        function changeAlert() {
            alert(`'Accusation ${[i]}: I accuse ${friends[i % friends.length]} with the ${weapons[i % weapons.length]} in the ${locations[i % locations.length]}!'`);
        }
        return changeAlert;
    };
}