let divisor = document.getElementById("divisor");
let slider = document.getElementById("slider");
function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}