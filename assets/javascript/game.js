$(document).ready(function() {
    
    // Obi-Wan Kenobi object
    var obiWanKenobi = {
        healthPoints: 120,
        attackPower: 8,
        counterAttackPower: 10, // unknown
        image: "./assets/images/obi-wan-kenobi.jpg"
    };

    // Luke Skywalker object
    var lukeSkywalker = {
        healthPoints: 100,
        attackPower: 12, // unknown
        counterAttackPower: 5,
        image: "./assets/images/luke-skywalker.jpg"
    };

    // Darth Sidious object
    var darthSidious = {
        healthPoints: 150,
        attackPower: 14, // unknown
        counterAttackPower: 20,
        image: "./assets/images/darth-sidious.jpg"
    };

    // Darth Maul object
    var darthMaul = {
        healthPoints: 180,
        attackPower: 10, // unknown
        counterAttackPower: 25,
        image: "./assets/images/darth-maul.jpg"
    };

    // Creating a game function
    function game() {

        // Creating variables to hold page elements to be used later
        var characterChoices = $(".character-choices");
        var enemyChoices = $(".enemy-choices");
        var btnAttack = $(".btn-attack");
        var currentDefender = $(".current-defender");
        var message = $(".message");
        
        // Creating a <div> for Obi-Wan Kenobi
        var obiDiv = $("<div>");
        obiDiv.addClass("character-wrapper obi-wan-kenobi");

        // Creating an <img> for Obi-Wan Kenobi
        var obiImage = $("<img>")
        obiImage.addClass("character-image");
        obiImage.attr("src", obiWanKenobi.image);

        // Appending items to obiDiv
        obiDiv.append("Obi-Wan Kenobi");
        obiDiv.append(obiImage);
        obiDiv.append(obiWanKenobi.healthPoints);

        // Appending obiDiv to the character choices div
        characterChoices.append(obiDiv);
    }

    game();

  }); // End of document ready function