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

        // Character stats

        var yourHealthPoints;
        var baseAttackPower;
        var yourAttackPower;
        var enemyHealthPoints;
        var enemyCounterAttack;

        // Loop to create buttons for each character
        for ( var i = 0; i < characters.length; i++ ) {
        
            // Creating a <button> for each character
            var characterButton = $("<button>");
            characterButton.addClass("btn-character").addClass(characters[i].className).val(characters[i].className);

            // Adding data values to the button
            characterButton.attr("data-health-points", characters[i].healthPoints);
            characterButton.attr("data-attack-power", characters[i].attackPower);
            characterButton.attr("data-enemy-health", characters[i].healthPoints);
            characterButton.attr("data-counter-attack", characters[i].counterAttackPower);
    
            // Creating an <img> for each character
            var characterImage = $("<img>")
            characterImage.addClass("character-image");
            characterImage.attr("src", characters[i].image);

            // Creating span for health points
            var healthPointsSpan = $("<span>");
            healthPointsSpan.addClass("health-points");
            healthPointsSpan.text(characters[i].healthPoints);
    
            // Appending items to characterButton
            characterButton.append(characters[i].name);
            characterButton.append(characterImage);
            characterButton.append(healthPointsSpan);
    
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

                // Sets your health points
                yourHealthPoints = yourCharacter.attr("data-health-points");
                console.log("Your Health: " + yourHealthPoints);

                // Sets your base attack power
                baseAttackPower = yourCharacter.attr("data-attack-power");
                yourAttackPower = parseInt(baseAttackPower);
                console.log("Attack Power: " + baseAttackPower);

                // Adding "btn-enemy" class to all buttons
                btnCharacter.addClass("btn-enemy");

                // Removes "btn-enemy" class from the chosen character
                yourCharacter.removeClass("btn-enemy");

                // Adds "your-character" class to the chosen character
                yourCharacter.addClass("your-character");

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

                // Adds "current-enemy" class to the chosen character
                yourEnemy.addClass("current-enemy");

                // Sets enemy's health points
                enemyHealthPoints = yourEnemy.attr("data-enemy-health");
                console.log("Enemy Health: " + enemyHealthPoints);

                // Sets enemy's counter attack power
                enemyCounterAttack = yourEnemy.attr("data-counter-attack");
                console.log("Counter Attack: " + enemyCounterAttack);
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
                enemyHealthPoints = enemyHealthPoints - yourAttackPower;
                yourAttackPower = yourAttackPower + parseInt(baseAttackPower);
                yourHealthPoints = yourHealthPoints - enemyCounterAttack;

                console.log("Your Attack Power: " + yourAttackPower);

                // Reducing your health and updating the value displayed in the button
                console.log("Your Health: " + yourHealthPoints);
                $(".your-character").find($(".health-points")).text(yourHealthPoints);

                // Reducing your enemy's health and updating the value displayed in the button
                console.log("Enemy Health: " + enemyHealthPoints);
                $(".current-enemy").find($(".health-points")).text(enemyHealthPoints);
            }

        });

    } // End of game function

    game();

  }); // End of document ready function