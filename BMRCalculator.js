let MaleButton = document.getElementById("Male")
let FemaleButton = document.getElementById("Female")
let submitBtn = document.querySelector(".submit")

let BMRValue = 0
window.addEventListener('click', function (e) {
    target = e.target
    if (target == submitBtn) {
        if(MaleButton.checked){
            
        }
        if(FemaleButton.checked){

        }
    }
})
//Male: 66.5 + (13.5 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
//Female: 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)
