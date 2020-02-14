var diameter = document.querySelector('input');
var omtrektotaal = document.querySelector('h2')

function omtrek() {
    const pi = 3.14;
    return diameter.value * pi;
}

function eindomtrek() {
    omtrektotaal.innerText = "De omtrek van de cirkel is: " +  omtrek();
}