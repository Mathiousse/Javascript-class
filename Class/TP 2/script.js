let positionDifference, position, options = {
    size: 12,
    walls: true,
    hearts: true,
    enemies: true,
    loot: true,
    ice: true,
}
createGrid(options)

document.querySelector('#go-up').onclick = goUp;
document.querySelector('#go-down').onclick = goDown;
document.querySelector('#go-right').onclick = goRight;
document.querySelector('#go-left').onclick = goLeft;
// Use arrow keys
document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        goUp()
    }
    else if (e.keyCode == '40') {
        goDown()
    }
    else if (e.keyCode == '37') {
        goLeft()
    }
    else if (e.keyCode == '39') {
        goRight()
    }
}
setHearts(3)


function NewPositionActions(position) {

    cellContent = getCellContent(position.x, position.y)
    if (cellContent === 1) {
        console.log('Treasure!')
        loot(position.x, position.y)
        if (getTreasures() === 0) {
            alert('Plus aucun trésor à récupérer, vous avez gagné !')
            window.location.reload()
        }
    }
    if (cellContent === 2) {
        console.log('Hearts!')
        if (getHearts() < 5) {
            setHearts(getHearts() + 1)

        }
    }
    if (cellContent === 3) {
        console.log('Enemy!')
        if (getHearts() < getMonsterPower(position.x, position.y)) {
            alert('Game Over...')
            window.location.reload()
        } else {
            setHearts(getHearts() - (getMonsterPower(position.x, position.y) - 1))
            killMonster(position.x, position.y)
        }
    }
}
// Movement functions
function goUp() {
    position = getHeroPosition()
    walls = getWalls(position.x, position.y)
    if (walls.north) {
        NewPositionActions(position)
    } else {
        position.y = position.y - 1
        setHeroPosition(position.x, (position.y))
        NewPositionActions(position)
        isFrozen(position.x, position.y) ? goUp() : ''
        
    }
}
function goDown() {
    position = getHeroPosition()
    walls = getWalls(position.x, position.y)
    if (walls.south) {
        NewPositionActions(position)
    } else {
        position.y = position.y + 1
        setHeroPosition(position.x, (position.y))
        NewPositionActions(position)
        isFrozen(position.x, position.y) ? goDown() : ''
        
    }
}
function goRight() {
    position = getHeroPosition()
    walls = getWalls(position.x, position.y)
    if (walls.east) {
        NewPositionActions(position)
    } else {
        position.x = position.x + 1
        setHeroPosition((position.x), position.y)
        NewPositionActions(position)
        isFrozen(position.x, position.y) ? goRight() : ''
        
    }
}
function goLeft() {
    position = getHeroPosition()
    walls = getWalls(position.x, position.y)
    if (walls.west) {
        NewPositionActions(position)
    } else {
        position.x = position.x - 1
        setHeroPosition((position.x), position.y)
        NewPositionActions(position)
        isFrozen(position.x, position.y) ? goLeft() : ''
        
    }
}

