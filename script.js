var roll;
var show = document.getElementById('num');
var button = document.getElementById('btn');
var img = document.getElementById('img');

// Add event listener for Enter key press 
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        rollDice();
    }
});

// Keep the button click event listener (optional)
button.addEventListener('click', function () {
    rollDice();
});

function rollDice() {
    roll = Math.ceil(Math.random() * 6);
    show.innerText = roll;

    switch (roll) {
        case 1:
            img.src = 'images/dice1.png'
            break;
        case 2:
            img.src = 'images/dice2.png'
            break;
        case 3:
            img.src = 'images/dice3.png'
            break;
        case 4:
            img.src = 'images/dice4.png'
            break;
        case 5:
            img.src = 'images/dice5.png'
            break;
        case 6:
            img.src = 'images/dice6.png'
            break;

        default:
            break;
    }
}
