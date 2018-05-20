$(document).ready(function() {

    // Array of objects for each character
    var characters = [
        {
            // Obi-Wan Kenobi
            name: "Obi-Wan Kenobi",
            healthPoints: 120,
            attackPower: 8,
            counterAttackPower: 10, // unknown
            image: "./assets/images/obi-wan-kenobi.jpg"
        },
        {
            // Luke Skywalker
            name: "Luke Skywalker",
            healthPoints: 100,
            attackPower: 12, // unknown
            counterAttackPower: 5,
            image: "./assets/images/luke-skywalker.jpg"
        },
        {
            // Darth Sidious
            name: "Darth Sidious",
            healthPoints: 150,
            attackPower: 14, // unknown
            counterAttackPower: 20,
            image: "./assets/images/darth-sidious.jpg"
        },
        {
            // Darth Maul
            name: "Darth Maul",
            healthPoints: 180,
            attackPower: 10, // unknown
            counterAttackPower: 25,
            image: "./assets/images/darth-maul.jpg"
        }
    ];

    // Creating a game function
    function game() {

        // Creating variables to hold page elements to be used later
        var characterChoices = $(".character-choices");
        var enemyChoices = $(".enemy-choices");
        var btnAttack = $(".btn-attack");
        var currentDefender = $(".current-defender");
        var message = $(".message");

        // Loop to create buttons for each character
        for ( var i = 0; i < characters.length; i++ ) {
        
            // Creating a <button> for each character
            var characterButton = $("<button>");
            characterButton.addClass("btn-character obi-wan-kenobi");
    
            // Creating an <img> for each character
            var characterImage = $("<img>")
            characterImage.addClass("character-image");
            characterImage.attr("src", characters[i].image);
    
            // Appending items to characterButton
            characterButton.append(characters[i].name);
            characterButton.append(characterImage);
            characterButton.append(characters[i].healthPoints);
    
            // Appending characterButton to the character choices div
            characterChoices.append(characterButton);
        }
    }

    game();

  }); // End of document ready function