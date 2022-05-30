function computerPlay() {
    let play = Math.floor(Math.random() * 3);
    if (play === 0) {
        return "ROCK";
    } else if (play === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

