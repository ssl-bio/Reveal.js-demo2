// Define background colors and initial theme
clrLink=getComputedStyle(document.body).getPropertyValue('--r-link-color');
clrLink=clrNorm(clrLink);
let bgMsg=clrLink+"b2";
let bgSlide=clrLink+"4c";

document.documentElement.style.setProperty('--clr-bg-message',bgMsg);
document.documentElement.style.setProperty('--clr-bg-slide',bgSlide);
    
// Return the value of the link color
function getColor(){
    clrLink=getComputedStyle(document.body).getPropertyValue('--r-link-color');
    clrLink=clrNorm(clrLink);
    let bgMsg=clrLink+"b2";
    let bgSlide=clrLink+"4c"
    return [bgMsg, bgSlide];
}


// Return a six character color, useful if a 3 letter is supplied
function clrNorm(clr){
    col=clr.replace("#","");
    if (col.length == 3){
	bg="#"+col[0].repeat(2)+col[1].repeat(2)+col[2].repeat(2);
    }
    return bg;
}


// Function to update background colors of div and button elements
function updateBg(){
    var [bgMsgCurr, bgSlideCurr] = getColor();
    if ( bgMsgCurr != bgMsg ){
	console.log("updating color");
	bgMsg=currColor;
	bgSlide=bgSlideCurr;
	document.documentElement.style.setProperty('--clr-bg-message',bgMsg);
	document.documentElement.style.setProperty('--clr-bg-slide',bgSlide);
    }  
}


// Function to toggle the visibility of the div element in the iframe slide
function ilegend(){
    console.log("ilegend launched")
    islide=Reveal.getCurrentSlide()
    if (islide.className.includes("iframe")){
	id=islide.id;
	isec=document.getElementById(id);
	idiv=isec.children[0];
	idiv.classList.toggle('out');
	updateBg();
    }
}


// Update slide upon changing slide
Reveal.addEventListener('slidechanged', updateBg);

