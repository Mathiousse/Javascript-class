let result = document.querySelector("#operation")
result.value = ''
let equal = document.querySelector("#btn-equals")
let clear = document.querySelector("#btn-C")
// Number keys onClicks (1,2,3,4,...)
for (i = 0; i < 10; i++) {
    document.querySelector("#btn-" + i).onclick = function (i) {
        result.value += i.path[0].innerText
    }
}
clear.onclick = function () {
    result.value = ''
}
// Operation signs onClicks (+, -, *, /)
signs = document.querySelectorAll('.operation-sign')
for (let i = 0; i < signs.length; i++) {
    signs[i].onclick = function () {
        result.value += ' ' + signs[i].innerText + ' '
    }

}
// Equal key onClick
equal.onclick = function () {
    result.value += ' = ' + eval(result.value)
    resulted = 1
}