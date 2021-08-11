function add() { 
    background_imgTag = new Image() ; 
    background_imgTag.onload = uploadBackground ; 
    background_imgTag.src = backgroundimage ; 
    rover_imgTag = new Image() ; 
    rover_imgTag.onload = uploadrover ; 
    rover_imgTag.src = roverimage ; 
}
function uploadBackground() {
ctx.drawImage(background_imgTag, 0 , 0 , canvas.width , canvas.height); 

}
function uploadrover() {
    ctx.drawImage(rover_imgTag, roverx , rovery , rover_width , rover_height); 
    
    }
    window.addEventListener("keydown", my_keydown ) ; 
    function my_keydown(e) {
        keypressed = e.keyCode ; 
        console.log(keypressed) ; 
            if(keypressed == '38') {
                up();
                console.log("up"); 


            }
            if(keypressed == '40') {
                down();
                console.log("down"); 
                

            }  
            if(keypressed == '37') {
                left();
                console.log("left"); 


            }
            if(keypressed == '39') {
                rigth();
                console.log("right"); 


            }


    }
