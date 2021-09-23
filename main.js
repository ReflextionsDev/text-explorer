// The first step is to create a way for the user to move around a coordinate system that has an x and y axis.

// To do this, you'll want to create variables to contain the user's x and y positions.

// Below these definitions, you'll need a while loop that loops endlessly. Each iteration, prompt the user for an action. If that action is "left", subtract one from the user's x position. Update the user's position appropriately for "right", "up", and "down" as well.

// After getting this working, make a commit in git!

const prompt = require('prompt-sync')()




let x = 0, y = 0
let playing = true;

console.log(x, y)

while (playing) {

    if (x === -2) {
        playing = false;
        break
    }

    let input = prompt("Your coordinates are (" + x + ", " + y + "). Would you like to go 'up', 'right', 'down', or 'left'? ")

    if (input === 'left') {
        x--
        console.log('left')
    }
    else if (input === 'right') {
        x++
    }
    else if (input === 'up') {
        y++
    }
    else if (input === 'down') {
        y--
    }
}

console.log("End!")