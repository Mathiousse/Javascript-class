let CurrentPlayerSymbol
let restartButton = document.createElement('button')


function init() {
    if ((Math.floor(Math.random() * 2) === 0)) {
        CurrentPlayerSymbol = "X"
    } else {
        CurrentPlayerSymbol = "O"
    }
    const whoPlays = document.createElement('div')
    whoPlays.id = 'game-turn'
    document.querySelector('body').append(whoPlays)
    UpdatePlayerMessage()
}

document.addEventListener('DOMContentLoaded', (event) => {
    init()
});

function play(x, y) {
    const caseJoueur = document.querySelector('#cell-' + x + '-' + y)
    if (caseJoueur.innerText) {
        alert('Pas sur cette case !')
    }
    else {
        caseJoueur.innerText = CurrentPlayerSymbol

        if (CurrentPlayerSymbol == "X") {
            CurrentPlayerSymbol = "O"
            caseJoueur.classList.add('symbol-x')
        } else {
            CurrentPlayerSymbol = "X"
            caseJoueur.classList.add('symbol-y')
        }
        UpdatePlayerMessage()
        CheckForVictory()
    }
}

allCases = document.querySelectorAll('td')
allCases.forEach(caseSingle => {
    caseSingle.onclick = function () {
        caseId = caseSingle.id
        play(caseId[5], caseId[7])
    };
});

function UpdatePlayerMessage() {
    document.querySelector('#game-turn').innerText = "C'est au tour de : " + CurrentPlayerSymbol
}

function MatchNul() {
    const emptyCases = document.querySelectorAll('td:empty')
    if (emptyCases.length == 0) {
        document.querySelector('#game-turn').style.display = 'none'
        alert('Match nul, la partie est terminée.')
    }
}

function CheckForVictory() {
    MatchNul()
    // Check vertical lines :
    for (i = 0; i < 3; i++) {
        firstCellText = document.querySelector('#cell-' + i + '-0').innerText
        secondCellText = document.querySelector('#cell-' + i + '-1').innerText
        thirdCellText = document.querySelector('#cell-' + i + '-2').innerText
        if ((firstCellText == 'X' && secondCellText == 'X' && thirdCellText == 'X') || (firstCellText == 'O' && secondCellText == 'O' && thirdCellText == 'O')) {
            document.querySelector('#game-turn').style.display = 'none'
            document.querySelector('#victoire-message').innerText = (middleText + ' gagne la partie !')
            document.querySelector('#victoire-message').style.top = 0
        }
    }
    // Check horizontal lines :
    for (i = 0; i < 3; i++) {
        firstCellText = document.querySelector('#cell-0-' + i).innerText
        secondCellText = document.querySelector('#cell-1-' + i).innerText
        thirdCellText = document.querySelector('#cell-2-' + i).innerText
        if ((firstCellText == 'X' && secondCellText == 'X' && thirdCellText == 'X') || (firstCellText == 'O' && secondCellText == 'O' && thirdCellText == 'O')) {
            document.querySelector('#game-turn').style.display = 'none'
            document.querySelector('#victoire-message').innerText = (middleText + ' gagne la partie !')
            document.querySelector('#victoire-message').style.top = 0
        }
    }
    // Check diagonal lines :
    topLeftText = document.querySelector('#cell-0-0').innerText
    bottomLeftText = document.querySelector('#cell-2-0').innerText
    middleText = document.querySelector('#cell-1-1').innerText
    topRightText = document.querySelector('#cell-0-2').innerText
    bottomRightText = document.querySelector('#cell-2-2').innerText
    if ((topLeftText == 'X' && middleText == 'X' && bottomRightText == 'X')
        || (topRightText == 'X' && middleText == 'X' && bottomLeftText == 'X')
        || (topRightText == 'O' && middleText == 'O' && bottomLeftText == 'O')
        || (topLeftText == 'O' && middleText == 'O' && bottomRightText == 'O')
    ) {
        document.querySelector('#game-turn').style.display = 'none'
        document.querySelector('#victoire-message').innerText = (middleText + ' gagne la partie !')
        document.querySelector('#victoire-message').style.top = 0
    }
}