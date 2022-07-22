let marks = [], averageTotal = 0, random

function generateMarks(n) {
    for (i = 0; i < n; i++) {
        random = Math.floor(Math.random() * 21)
        marks.push(random)
        averageTotal = averageTotal + random
    }
    average = averageTotal / marks.length
}

generateMarks(80)
displayMarks()
displayAverage()