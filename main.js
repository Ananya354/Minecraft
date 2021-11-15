var myCanvas = new fabric.Canvas("myCanvas");
var player_x= 10;
var player_y= 10;
var block_width= 30;
var block_height= 30;
var player_object= "";
var block_image_object= "";

function addPlayer(){
fabric.Image.fromURL("player.png",function(Img){
player_object= Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({top:player_y,left:player_x});
myCanvas.add(player_object);
});
}
function newImage(get_image){
fabric.Image.fromURL(get_image,function(Img){
block_image_object= Img;
block_image_object.scaleToWidth(block_width);
block_image_object.scaleToHeight(block_height);
block_image_object.set({top:player_y,left:player_x});
myCanvas.add(block_image_object);
});
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPress= e.keyCode;
console.log (keyPress);

if(e.shiftKey == true && keyPress == '80') { 
console.log("p and shift pressed together"); 
block_width = block_width + 10; 
block_height = block_height + 10; 
document.getElementById("cwidth").innerHTML = block_width; 
document.getElementById("cheight").innerHTML = block_height;
}
if(e.shiftKey == true && keyPress== '77'){
console.log ("m and shift pressed together");
block_width = block_width - 10; 
block_height = block_height - 10; 
document.getElementById("cwidth").innerHTML = block_width; 
document.getElementById("cheight").innerHTML = block_height;
}
if(keyPress=='38'){
console.log("up arrow is clicked");
up();
}
if(keyPress=='40'){
console.log("down arrow is clicked");
down();
}
if(keyPress=='37'){
console.log("left arrow is clicked");
left();
}
if(keyPress=='39'){
console.log("right arrow is clicked");
right();
}
if(keyPress=='67'){
console.log("c");
newImage("cloud.jpg");
}
if(keyPress=='68'){
console.log("d");
newImage("dark_green.png");
}
if(keyPress=='71'){
console.log("g");
newImage("ground.png");
}
if(keyPress=='76'){
console.log("l");
newImage("light_green.png");
}
if(keyPress=='82'){
console.log("r");
newImage("roof.jpg");
}
if(keyPress=='84'){
console.log("t");
newImage("trunk.jpg");
}
if(keyPress=='85'){
console.log("u");
newImage("unique.png");
}
if(keyPress=='87'){
console.log("w");
newImage("wall.jpg");
}
if(keyPress=='89'){
console.log("y");
newImage("yellow.png");
}
}
 
function up(){
if (player_y>0){
player_y= player_y-block_height;
myCanvas.remove (player_object);
addPlayer();
}
}
function down(){
if (player_y<700){
player_y= player_y+block_height;
myCanvas.remove (player_object);
addPlayer();
}
}
function left(){
if (player_x>0){
player_x= player_x-block_width;
myCanvas.remove (player_object);
addPlayer();
}
}
function right(){
if (player_x<900){
player_x= player_x+block_width;
myCanvas.remove (player_object);
addPlayer();
}
}



