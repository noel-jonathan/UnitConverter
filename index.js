/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.querySelector("#input")
const convertBtn = document.querySelector("#convert-btn")
const lengthEl = document.querySelector("#length-el")
const massEl = document.querySelector("#mass-el")
const volumeEl = document.querySelector("#volume-el")

convertBtn.addEventListener("click", {
    // 
})

function renderConversion (typeEl, metric, imperial) {
    input.value = 20
    typeEl.textContent = `${input.value} ${metric} = 65.616 ${imperial} | ${input.value} ${imperial} = 6.096 ${metric}`
}

unitConversion (lengthEl, "meters", "feets")
unitConversion (massEl, "kilograms", "pounds")
unitConversion (volumeEl, "liters", "gallons")