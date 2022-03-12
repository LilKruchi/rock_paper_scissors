function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
    computerDecision = getRndInt(0,2);

    if (computerDecision === 0) {
        return("Rock")
    }
    else if (computerDecision === 1) {
        return("Paper")
    }
    else {
        return("Scissors")
    }
}

console.log(computerPlay())