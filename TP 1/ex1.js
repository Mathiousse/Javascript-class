function calculateWaterState(degrees) {

    let state = ""

    if (degrees >= 100) {
        state = 'gazeux'
    } else if (degrees >= 0) {
        state = 'liquide'
    } else {
        state = 'solide'
    }

    return state;
}

function celsiusToFahrenheit(degrees) {

    return degrees * 1.8 + 32

}