$(document).ready(function() {

    // Array of objects for each character
    var characters = [
        {
            // Obi-Wan Kenobi
            name: "Obi-Wan Kenobi",
            className: "obi-wan-kenobi",
            healthPoints: 120,
            attackPower: 8,
            counterAttackPower: 10, // unknown
            image: "./assets/images/obi-wan-kenobi.jpg"
        },
        {
            // Luke Skywalker
            name: "Luke Skywalker",
            className: "luke-skywalker",
            healthPoints: 100,
            attackPower: 12, // unknown
            counterAttackPower: 5,
            image: "./assets/images/luke-skywalker.jpg"
        },
        {
            // Darth Sidious
            name: "Darth Sidious",
            className: "darth-sidious",
            healthPoints: 150,
            attackPower: 14, // unknown
            counterAttackPower: 20,
            image: "./assets/images/darth-sidious.jpg"
        },
        {
            // Darth Maul
            name: "Darth Maul",
            className: "darth-maul",
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
        
        var characterChosen = false;
        var enemyChosen = false;

        var yourCharacter;
        var yourEnemy;

        // Your character stats

        var yourHealthPoints;
        var yourAttackPower;
        var enemyCounterAttack;

        // Loop to create buttons for each character
        for ( var i = 0; i < characters.length; i++ ) {
        
            // Creating a <button> for each character
            var characterButton = $("<button>");
            characterButton.addClass("btn-character").addClass(characters[i].className).val(characters[i].className);
    
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

        // Choose your character
        characterChoices.on("click", ".btn-character", function() {

            // Storing the button in a variable
            var btnCharacter = $(".btn-character");

            if(!characterChosen) {

                // Stores the chosen character in a variable
                yourCharacter = ($(this));

                // Adding "btn-enemy" class to all buttons
                btnCharacter.addClass("btn-enemy");

                // Removes "btn-enemy" class from the chosen character
                yourCharacter.removeClass("btn-enemy");

                // Appends characters that were not chosen to the enemy choices div
                enemyChoices.append(btnCharacter);
                characterChoices.append(this);

                characterChosen = true;
            }
            else {

                // Attack code should happen here
                console.log("Character has been chosen");
            }
        });

        // Choose your enemy
        enemyChoices.on("click", ".btn-enemy", function() {

            if(!enemyChosen) {
                yourEnemy = ($(this));
                enemyChoices.append($(".btn-enemy"));
                currentDefender.append(this);
                enemyChosen = true;
            }
            else {

                // Attack code should happen here
                console.log("Enemy has been chosen");
            }
        });

        // Attack button

        $(".controls").on("click", ".btn-attack", function() {

            if(!characterChosen) {
                message.text("Please choose a character.");
            }
            else {

            }

        });

    } // End of game function

    game();

  }); // End of document ready function