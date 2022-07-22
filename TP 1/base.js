document.addEventListener("DOMContentLoaded", function() {
    // Ex 1
    if (document.querySelector("#ex1-btn")) {
        document.querySelector("#ex1-btn").onclick = function () {
            document.querySelector("#ex1-result").style.display = "none";
            if (calculateWaterState) {
                var value = document.querySelector("#ex1-temp").value;
                var result = calculateWaterState(value);
                if (result) {
                    document.querySelector("#ex1-result strong").innerText = result;
                    document.querySelector("#ex1-result").style.display = "block";
                }
            }
            if (celsiusToFahrenheit) {
                var value = document.querySelector("#ex1-temp").value;
                var result = celsiusToFahrenheit(value);
                if (result) {
                    document.querySelector("#ex11-result strong").innerText = result;
                    document.querySelector("#ex11-result").style.display = "block";
                }
            }
        };
    }
});

// Ex 3
function displayMarks() {
    document.querySelector('#marks').innerHTML = '';
    if (marks) {
        document.querySelector('#marks').innerHTML = '<table><tr>' + marks.map(m => '<td>' + m + '</td>').join('') + '</tr></table>';
    }
}
function displayAverage() {
    document.querySelector('#average span').innerText = average;
}

// Ex 4
if (typeof sumBasis !== "undefined") {
    document.querySelector("#sum-basis span").innerText = sumBasis;
}

if (typeof sumFirstIntegers !== "undefined") {
    document.querySelector("#sum-number span").innerText = sumFirstIntegers(sumBasis);
}

if (typeof sumFirstOddIntegers !== "undefined") {
    document.querySelector("#sum-odd-number span").innerText = sumFirstOddIntegers(sumBasis);
    document.querySelector("#sum-odd-number").style.display = "block";
}