let UsSelector = document.getElementById("UsUnitSelector")
let UsUnits = document.querySelector(".US-Units")
let MetrcSelector = document.getElementById("MetricSelector")
let MetricUnit = document.querySelector(".Metric")

window.addEventListener('click', function (e) {
    target = e.target
    if(target == UsSelector){
        showUsSystem()
    }
    else if(target == MetrcSelector){
        showMetricSystem()
    }
})
function showUsSystem() {
    UsUnits.removeAttribute('hidden')
    MetricUnit.setAttribute('hidden', "")
    document.getElementById("MetricWeight").value = null
    document.getElementById("MetricHeight").value = null
}
function showMetricSystem() {
    MetricUnit.removeAttribute('hidden')
    UsUnits.setAttribute('hidden', "")
    document.getElementById("UsFt").value = null
    document.getElementById("UsInches").value = null
}