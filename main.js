canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

// Varibles for rover image
rover_image="rover.png";
rover_height=90;
rover_width=100;
rover_x=10;
rover_y=10;

// Varible for canvas background
background_image="mars.jpg";

// Function for updating the bg and rover image
function add(){
    update_background_img_tag=new Image(); // Defining a varible with new img
    update_background_img_tag.onload=uploadBackground; // Setting a function when we load the pg
update_background_img_tag.src=background_image;

update_rover_img_tag=new Image(); // Defining a varible with new img
update_rover_img_tag.onload=uploadRover;// Setting a function when we load the pg
update_rover_img_tag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(update_background_img_tag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(update_rover_img_tag,rover_x,rover_y,rover_width,rover_height);
}

// Codes for key pressed events
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        console.log("up");
        up();
    }

    if(keyPressed=='39'){
        console.log("Right");
        right();
    }
    
    if(keyPressed=='40'){
        console.log("Down ");
        down();
    }

    if(keyPressed=='37'){
        console.log("Left");
        left();
    }
}

function up(){
    if(rover_y>=0){
rover_y=rover_y-10;
console.log("when up arrow is pressed.x="+rover_x+"y="+rover_y);
uploadBackground();
uploadRover();

    }
}
function down(){
    if(rover_y<=500){
rover_y=rover_y+10;
console.log("when down arrow is pressed.x="+rover_x+"y="+rover_y);
uploadBackground();
uploadRover();
    }
}
function left(){
    if(rover_x>=0){
rover_x=rover_x-10;
console.log("when left arrow is pressed.x="+rover_x+"y="+rover_y);
uploadBackground();
uploadRover();
    }
}
function right(){
    if(rover_x<=700){
rover_x=rover_x+10;
console.log("when right arrow is pressed.x="+rover_x+"y="+rover_y);
uploadBackground();
uploadRover();
    }
}