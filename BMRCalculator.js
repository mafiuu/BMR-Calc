let MaleButton = document.getElementById("Male")
let FemaleButton = document.getElementById("Female")
let UsWeight
let UsHeight
let MetricWeight
let MetricHeight
let submitBtn = document.querySelector(".submit")
let resetBtn = document.querySelector(".reset")
let response = document.querySelector(".response")
let BMRWeight
let BMRHeight
let BMRAge
let BMRValue = 0


window.addEventListener('click', function (e) {
    target = e.target
    if (target == submitBtn) {
        UsWeight = document.getElementById("UsWeight").value
        UsHeight = +document.getElementById("UsFt").value * 12 + +document.getElementById("UsInches").value
        MetricWeight = document.getElementById("MetricWeight").value
        MetricHeight = document.getElementById("MetricHeight").value
        BMRAge = document.getElementById("Age").value

        if (!MaleButton.checked && !FemaleButton.checked)
            alert("Information missing. Check your GENDER input")
        else if (UsWeight == '' && MetricWeight == '')
            alert("Information missing. Check your WEIGHT input")
        else if (UsHeight == '' && MetricHeight == '')
            alert("Information missing. Check your HEIGHT input")
        else if (BMRAge == '')
            alert("Information missing. Check your AGE input")

        if (UsWeight != '' && MetricWeight == '') BMRWeight = UsWeight / 2.205
        else BMRWeight = MetricWeight
        if (UsHeight != '' && MetricHeight == '') BMRHeight = UsHeight * 2.54
        else BMRHeight = MetricHeight

        if (MaleButton.checked) BMRValue = Math.ceil(66.5 + (13.5 * BMRWeight) + (5.003 * BMRHeight) - (6.75 * BMRAge))
        else if (FemaleButton.checked) BMRValue = Math.ceil(655.1 + (9.563 * BMRWeight) + (1.850 * BMRHeight) - (4.676 * BMRAge))

        response.innerText = "Your BMR is: " + BMRValue
    } else if (target == resetBtn)
        location.reload()
})
window.addEventListener('touch', function (e) {
    target = e.target
    if (target == submitBtn) {
        UsWeight = document.getElementById("UsWeight").value
        UsHeight = +document.getElementById("UsFt").value * 12 + +document.getElementById("UsInches").value
        MetricWeight = document.getElementById("MetricWeight").value
        MetricHeight = document.getElementById("MetricHeight").value
        BMRAge = document.getElementById("Age").value

        if (!MaleButton.checked && !FemaleButton.checked)
            alert("Information missing. Check your GENDER input")
        else if (UsWeight == '' && MetricWeight == '')
            alert("Information missing. Check your WEIGHT input")
        else if (UsHeight == '' && MetricHeight == '')
            alert("Information missing. Check your HEIGHT input")
        else if (BMRAge == '')
            alert("Information missing. Check your AGE input")

        if (UsWeight != '' && MetricWeight == '') BMRWeight = UsWeight / 2.205
        else BMRWeight = MetricWeight
        if (UsHeight != '' && MetricHeight == '') BMRHeight = UsHeight * 2.54
        else BMRHeight = MetricHeight

        if (MaleButton.checked) BMRValue = Math.ceil(66.5 + (13.5 * BMRWeight) + (5.003 * BMRHeight) - (6.75 * BMRAge))
        else if (FemaleButton.checked) BMRValue = Math.ceil(655.1 + (9.563 * BMRWeight) + (1.850 * BMRHeight) - (4.676 * BMRAge))

        response.innerText = "Your BMR is: " + BMRValue
    } else if (target == resetBtn)
        location.reload()
})