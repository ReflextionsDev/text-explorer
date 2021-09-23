// The first step is to create a way for the user to move around a coordinate system that has an x and y axis.

// To do this, you'll want to create variables to contain the user's x and y positions.

// Below these definitions, you'll need a while loop that loops endlessly. Each iteration, prompt the user for an action. If that action is "left", subtract one from the user's x position. Update the user's position appropriately for "right", "up", and "down" as well.

// After getting this working, make a commit in git!

const prompt = require('prompt-sync')({ sigint: true })




let x = 0, y = 0, location
let playing = true, weapon = false;
let ending;

console.log("You awaken, uncertain of where you are. Slowly your head clears and you remember that you were beaten and robbed. Your favorite hat is gone. You stand up and swear revenge.")

while (playing) {

    let input = prompt("Your coordinates are (" + x + ", " + y + "). Would you like to go 'up', 'right', 'down', or 'left'? ")

    if (input === 'left') {
        x--
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

    console.log('\n')

    if (x === -2) {
        if (y === -2) {
            location = "You find a cave, which you catiously enter, fearing the worst. Somethings been here, but it's gone. It left nothing of value."
        }
        if (y === -1) {
            location = "An unnatural fog rolls in, but you keep walking. Suddenly you find yourself in a graveyard. Best not stay here too long."
        }
        if (y === 0) {
            location = "You enter an unassuming field. There's nothing here, but the view is nice."
        }
        if (y === 1) {
            location = "You come upon a windmill, looks like there's no way in."
        }
        if (y === 2) {
            location = "You hear horses behind you. You turn around as an arrow flies by your head. You see a group of highwaymen, and the leader is wearing your hat. They're here to finish what they started."
            playing = false;

            //if has dagger, else died
            ending = "win";
        }
    }

    if (x === -1) {
        if (y === -2) {
            location = "Howls break out as you see a pack of wolves eying you from a ledge. Seems they'll leave you alone if you keep your distance."
        }
        if (y === -1) {
            location = "Decripit piles of stone tell you this once was a place of power, but those days are long gone."
        }
        if (y === 0) {
            location = "You come across a large pond. You don't feel like swimming."
        }
        if (y === 1) {
            location = "You find an unoccupied temple. Not many worshippers these days."
        }
        if (y === 2) {
            location = "You enter a village. You ask around about your robbers, but the townsfolk are unhelpful and generally rude."
        }
    }

    if (x === -0) {
        location = "You stand beside the river, which runs to the North and South as far as you can see. You should be able to swim across."
    }

    if (x === 1) {
        if (y === -2) {
            location = "You walk up to a watchtower. The guard tells you saw a shady group going to the north."
        }
        if (y === -1) {
            location = "Here lies an abandoned house. You find a small dagger hidden under a book."
        }
        if (y === 0) {
            location = "You come accross Fol Castle. A well known location in these parts. Well known for not taking kindly to trespassers."
        }
        if (y === 1) {
            location = "You see a fire and approach it hoping to share in the warmth. As you get closer, you realize it's surrounded by bandits. But they've already seen you. They're drunk and they're angry."

            //clear if has dagger, else died
        }
        if (y === 2) {
            location = "You come across a humble magic shop. You never had the aptitude. You curse your parents for their bad genes and move on."
        }
    }

    if (x === 2) {
        if (y === -2) {
            location = "Weary, you enter a tavern. After a few drinks you feel better until you remember your hat is gone."
        }
        if (y === -1) {
            location = "Incrediously, you stumble upon a chest hidden in the brush. It's filled to the brim with gold coins and jewels. All worthless compared to your favorite hat."
        }
        if (y === 0) {
            location = "Here lies a small cabin. A kind old man tells you rumors of some troublemakers northwest."
        }
        if (y === 1) {
            location = "Nothing but farmland here."
        }
        if (y === 2) {
            location = "You climb up a hill excited to reach the top. Somehow the view there is worse than it was below. Your mad."
        }
    }

    console.log(location)


}


if (ending == 'win') {
    console.log("Thanfully, you have a weapon at your side. In a hat-obsessed-rage you cut down your foes. ")
}
else if (ending == 'lose') {
    console.log("Nobody will ever know why you ran into a battle empty handed, and unfortunately you'll never be able to explain it cause you're dead.")
}