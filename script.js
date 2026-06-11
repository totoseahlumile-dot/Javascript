let generateButton = document.getElementById("generateButton");
let resetButton = document.getElementById("resetButton");
let spellArea = document.getElementById("spellArea");

generateButton.addEventListener("click", function () {

    let ingredients = [
        "Dragon Scale",
        "Phoenix Feather",
        "Unicorn Horn"
    ];

    let randomNumber = Math.floor(Math.random() * ingredients.length);

    let spell = ingredients[randomNumber];

    let count = 3;

    spellArea.innerHTML = count;

    let countdown = setInterval(function () {

        count--;

        if (count > 0) {
            spellArea.innerHTML = count;
        }
        else {

            clearInterval(countdown);

            spellArea.innerHTML = "Your spell is: " + spell;

            let color = "#" + Math.floor(Math.random() * 16777215).toString(16);

            spellArea.style.backgroundColor = color;
        }

    }, 1000);

});

resetButton.addEventListener("click", function () {

    spellArea.innerHTML = "Spell Area";
    spellArea.style.backgroundColor = "white";

});