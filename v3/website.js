let displayedReview=0;
let divisor = document.getElementById("divisor");
let slider = document.getElementById("slider");
function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}

//review section

//Initialise element handles and get numebr of reviews
let currentReview=document.getElementById("currentReview");
let reviewBank=document.getElementById("reviewBank");
let numReviews=reviewBank.children.length;

//Set the initial review to be the first review (if there are any reviews)
if(reviewBank.children.length>0){
	currentReview.children[0].children[0].innerHTML=reviewBank.children[0].children[0].innerHTML;
	currentReview.children[0].children[1].innerHTML=reviewBank.children[0].children[1].innerHTML;
}

//cycle reviews in the reviewclick function - argument is either -1 (leftButtonClick) or +1 (rightButtonClick) 
function reviewClick(argument){
	displayedReview+=argument;
	displayedReview=displayedReview%numReviews;
	if(displayedReview<0){displayedReview=numReviews-1;}
	currentReview.children[0].children[0].innerHTML=reviewBank.children[displayedReview].children[0].innerHTML;
	currentReview.children[0].children[1].innerHTML=reviewBank.children[displayedReview].children[1].innerHTML;
}

