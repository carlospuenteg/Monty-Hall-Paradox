
var myDoor;
var winDoor;
var nopeDoor;
var random;
var change;
var resetTime;
var autoVar = false;
var autoYesVar = false;
var autoNoVar = false;

var changingWins = 0;
var changingFails = 0;
var changingOdds = 0;

var notChangingWins = 0;
var notChangingFails = 0;
var changingOdds = 0;
var count = 0;

function paradox(door) {

    
    myDoor = door;
    winDoor = Math.floor(Math.random() * 3) + 1; // win door = 1 , 2 , 3

    switch (myDoor) {
        case 1: // door = 1
            document.getElementById("image1").src="images/your-door.png";
            if (winDoor == 1) {
                nopeDoor = Math.floor(Math.random() * 2) + 2;
                if (nopeDoor == 2) {document.getElementById("image2").src="images/nope-door.png"}
                else if (nopeDoor == 3) {document.getElementById("image3").src="images/nope-door.png"}
            }
            if (winDoor == 2) {nopeDoor = 3 ; document.getElementById("image3").src="images/nope-door.png"}
            if (winDoor == 3) {nopeDoor = 2 ; document.getElementById("image2").src="images/nope-door.png"}
            break;

        case 2: // door = 2
            document.getElementById("image2").src="images/your-door.png";
            if (winDoor == 1) {nopeDoor = 3 ; document.getElementById("image3").src="images/nope-door.png"}
            if (winDoor == 2) {
                var random = Math.floor(Math.random() * 2);
                if (random == 0) {nopeDoor = 1 ; document.getElementById("image1").src="images/nope-door.png"}
                if (random == 1) {nopeDoor = 3 ; document.getElementById("image3").src="images/nope-door.png"}
            }
            if (winDoor == 3) {nopeDoor = 1 ; document.getElementById("image1").src="images/nope-door.png"}
            break;
        case 3: // door = 3
            document.getElementById("image3").src="images/your-door.png";
            if (winDoor == 1) {nopeDoor = 2 ; document.getElementById("image2").src="images/nope-door.png"}
            if (winDoor == 2) {nopeDoor = 1 ; document.getElementById("image1").src="images/nope-door.png"}
            if (winDoor == 3) {
                nopeDoor = Math.floor(Math.random() * 2) + 1;
                if (nopeDoor == 1) {document.getElementById("image1").src="images/nope-door.png"}
                else if (nopeDoor == 2) {document.getElementById("image2").src="images/nope-door.png"}
            }
            break;
    }
    document.getElementById("yes").style.display = "inline";
    document.getElementById("no").style.display = "inline";
    document.getElementById("message").innerHTML = "> Do you want to switch?";
}

function phase2() {
    switch (change) {
        case 0:
            if (myDoor == winDoor) {
                if (myDoor == 1) {document.getElementById("image1").src="images/win-door.png"}
                else if (myDoor == 2) {document.getElementById("image2").src="images/win-door.png"}
                else if (myDoor == 3) {document.getElementById("image3").src="images/win-door.png"}
            } else {
                if (winDoor == 1 && nopeDoor == 2) {document.getElementById("image3").src="images/nope-door.png"}
                else if (winDoor == 1 && nopeDoor == 3) {document.getElementById("image2").src="images/nope-door.png"}
                else if (winDoor == 2 && nopeDoor == 3) {document.getElementById("image1").src="images/nope-door.png"}
                else if (winDoor == 2 && nopeDoor == 1) {document.getElementById("image3").src="images/nope-door.png"}
                else if (winDoor == 3 && nopeDoor == 1) {document.getElementById("image2").src="images/nope-door.png"}
                else if (winDoor == 3 && nopeDoor == 2) {document.getElementById("image1").src="images/nope-door.png"}
            }
            break;
        case 1:
            if (myDoor == 1 && nopeDoor == 2) {myDoor = 3}
            else if (myDoor == 1 && nopeDoor == 3) {myDoor = 2}
            else if (myDoor == 2 && nopeDoor == 1) {myDoor = 3}
            else if (myDoor == 2 && nopeDoor == 3) {myDoor = 1}
            else if (myDoor == 3 && nopeDoor == 2) {myDoor = 1}
            else if (myDoor == 3 && nopeDoor == 1) {myDoor = 2}

            if (myDoor == winDoor) {
                if (myDoor == 1) {document.getElementById("image1").src="images/win-door.png"}
                else if (myDoor == 2) {document.getElementById("image2").src="images/win-door.png"}
                else if (myDoor == 3) {document.getElementById("image3").src="images/win-door.png"}
            } else {
                if (winDoor == 1 && nopeDoor == 2) {document.getElementById("image3").src="images/nope-door.png"}
                else if (winDoor == 1 && nopeDoor == 3) {document.getElementById("image2").src="images/nope-door.png"}
                else if (winDoor == 2 && nopeDoor == 3) {document.getElementById("image1").src="images/nope-door.png"}
                else if (winDoor == 2 && nopeDoor == 1) {document.getElementById("image3").src="images/nope-door.png"}
                else if (winDoor == 3 && nopeDoor == 1) {document.getElementById("image2").src="images/nope-door.png"}
                else if (winDoor == 3 && nopeDoor == 2) {document.getElementById("image1").src="images/nope-door.png"}
            }
            break;
    }
    if (change == 1 && myDoor == winDoor) {changingWins++}
    else if (change == 1 && myDoor != winDoor) {changingFails++}
    else if (change == 0 && myDoor == winDoor) {notChangingWins++}
    else if (change == 0 && myDoor != winDoor) {notChangingFails++}

    changingOdds = changingWins / (changingWins + changingFails) * 100;
    notChangingOdds = notChangingWins / (notChangingWins + notChangingFails) * 100;
    count++;
    if (isNaN(changingOdds) == false) {
        document.getElementById("changing").innerHTML = changingOdds.toFixed(8);
    }
    if (isNaN(notChangingOdds) == false) {
        document.getElementById("notChanging").innerHTML = notChangingOdds.toFixed(8);
    }
    document.getElementById("count").innerHTML = count;
        
    setTimeout(function reset() {
                        
        document.getElementById("image1").src="images/closed-door.png"
        document.getElementById("image2").src="images/closed-door.png"
        document.getElementById("image3").src="images/closed-door.png"
        document.getElementById("message").innerHTML = "> Choose a door"
        document.getElementById("yes").style.display = "none";
        document.getElementById("no").style.display = "none";
        myDoor = undefined;
        winDoor = undefined;
        myDoor = undefined;
        random = undefined;
        change = undefined;

    },resetTime)

}

function autoYes() {
    setInterval(function myFunction() {
        if (autoYesVar === true) {
        document.getElementById("image1").click();
        document.getElementById("yes").click();
        }
    },1)
}

function autoNo() {
    setInterval(function myFunction() {
        if (autoNoVar === true) {
        document.getElementById("image1").click();
        document.getElementById("no").click();
        }
    },1)
}

function auto() {

        setInterval(function myFunction() {
            if (autoVar === true) {
            document.getElementById("image1").click();
            document.getElementById("yes").click();
            setTimeout(function myFunction() {
                document.getElementById("image1").click();
                document.getElementById("no").click();
            },1)
            }
        },1)
    }

function changeAutoVar() {
    if (autoVar === true) {autoVar = false}
    else if (autoVar === false) {autoVar = true}
}

function changeAutoYesVar() {
    if (autoYesVar === true) {autoYesVar = false}
    else if (autoYesVar === false) {autoYesVar = true}
}

function changeAutoNoVar() {
    if (autoNoVar === true) {autoNoVar = false}
    else if (autoNoVar === false) {autoNoVar = true}
}

function resetAll() {
    document.getElementById("image1").src="images/closed-door.png"
    document.getElementById("image2").src="images/closed-door.png"
    document.getElementById("image3").src="images/closed-door.png"

    myDoor = undefined;
    winDoor = undefined;
    myDoor = undefined;
    random = undefined;
    change = undefined;

    autoVar = false;
    autoYesVar = false;
    autoNoVar = false;

    changingWins = 0;
    changingFails = 0;
    changingOdds = 0;

    notChangingWins = 0;
    notChangingFails = 0;
    changingOdds = 0;
    count = 0;

    document.getElementById("changing").innerHTML = "00.00000000";
    document.getElementById("notChanging").innerHTML = "00.00000000";
    document.getElementById("count").innerHTML = "0";
    document.getElementById("message").innerHTML = "> Choose a door"
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";
}
