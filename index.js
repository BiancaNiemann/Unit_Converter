/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputBox = document.getElementById('input-box')
const convertBtn = document.getElementById('convert-btn')
const convertLength = document.getElementById('convert-length')
const convertVolume = document.getElementById('convert-volume')
const convertMass = document.getElementById('convert-mass')

convertBtn.addEventListener('click', function() {
    let unit = inputBox.value
    const meterMultiplied = (unit * 3.281).toFixed(3)
    const feetDivided = (unit / 3.281).toFixed(3)
    const litersMultiplied = (unit * 0.264).toFixed(3)
    const gallonsDivided = (unit / 0.264).toFixed(3)
    const kilogramsMultiplied = (unit * 2.204).toFixed(3)
    const poundsDivided = (unit / 2.204).toFixed(3)
    
    convertLength.innerHTML = `
        <p id="convert-length">
            ${unit} meters = ${meterMultiplied} feet |  
            ${unit} feet = ${feetDivided} meters 
        </p>`
        
    convertVolume.innerHTML = `
        <p id="convert-length">
            ${unit} liters = ${litersMultiplied} gallons |  
            ${unit} gallons = ${gallonsDivided} liters
        </p>`
        
    convertMass.innerHTML = `
        <p id="convert-length">
            ${unit} kilograms = ${kilogramsMultiplied} pounds |  
            ${unit} pounds = ${poundsDivided} kilograms
        </p>`
    
    //const length = `${unit} meters = ${(unit * 3.281).toFixed(3)} feet |  
    //${unit} feet = ${(unit / 3.281).toFixed(3)} meters`  
})







