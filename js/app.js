function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
   console.log( document.getElementsByClassName("class1"));
}

function byTag() {
    console.log( document.querySelectorAll("p")); 
}

function changeBackground() {
    document.getElementById('block1').style.color="blue";
}

function increaseFont() {
document.getElementById('block2').style.fontSize= "25px";
}

function changeFontColor() {
document.getElementById('block3').style.color="green";
}

function revertColor() {
document.getElementById('block3').style.color="black";
}

function hide() {
document.getElementById('block4').style.visibility="hidden";
}

function changeBackColor(){
var all= new Array(document.querySelectorAll("box1"));

}


function addAdjacent() {
}

function removePara() {

}

function animatePara() {

}