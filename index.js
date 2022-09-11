const input = document.querySelector("#input")
const convertBtn = document.querySelector("#convert-btn")
const lengthEl = document.querySelector("#length-el")
const massEl = document.querySelector("#mass-el")
const volumeEl = document.querySelector("#volume-el")
const convertRatio = {
    meters: 3.281,
    liters: 0.264,
    kilograms: 2.204
}

input.value = 10

convertBtn.addEventListener ("click", function() {
    render()
})

input.addEventListener ("keyup", function() {
    render()
})

function convert(value, ratio, conversionWay) {
    if (conversionWay) {
        return value * ratio
    }
    return value / ratio
}

function renderConversion(targetEl, metric, imperial) {
    targetEl.innerHTML = `
        ${input.value} ${metric} = 
        ${convert(input.value, convertRatio[metric], true).toFixed(2)} ${imperial} <p> 
        ${input.value} ${imperial} =
        ${convert(input.value, convertRatio[metric], false).toFixed(2)} ${metric} </p>
    `
}

function render() {
    renderConversion (lengthEl, "meters", "feet")
    renderConversion (volumeEl, "liters", "gallons")
    renderConversion (massEl, "kilograms", "pounds")
}

render()