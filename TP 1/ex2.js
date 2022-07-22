const valueToGuess = Math.floor(Math.random() * 100); // Entier aléatoire entre 0 et 100 (exclu)
let ValueGuessed, GameRunning, attempts = []

function guess(value) {

    if (value > valueToGuess) {
        return "C'est trop haut !"
    }
    else if (value == valueToGuess) {
        return "GG EZ, tu as trouvé en " + attempts.length + " essais, voici vos essais : \n" + attempts
    }
    else if (value < valueToGuess) {
        return "C'est trop bas !"
    }
}

function ask() {
    return prompt("Quel chiffre ?")
}

function play() {
    GameRunning = 1
    while (GameRunning == 1) {
        ValueGuessed = ask()
        attempts.push(ValueGuessed)
        if (ValueGuessed != null) {
            alert(guess(ValueGuessed))
        } else { alert("Le nombre à deviner était : " + valueToGuess) }
        if (ValueGuessed == valueToGuess || ValueGuessed == null) {
            GameRunning = 0
        }
    }
}