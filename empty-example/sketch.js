var textx=0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0, 110, 213);
    
    //Right Eyes
    fill('white');
    noStroke();
    ellipse(250, 200, 100);
    
    //Left Eyes
    fill('white');
    noStroke();
    ellipse(450, 200, 50);
    
    //rightIris
    fill('black');
    noStroke();
    ellipse(250, 200, 50);
    
    //left Iris
    fill('black');
    noStroke();
    ellipse(450, 200, 40);
    
    //Smile
    stroke(2);
    fill('black');
    rect(310, 280, 95, mouseY, 20);
    
    //tonge
    fill('red');
    rect(350, 280, 95, mouseY, 20);
   
   //Text 
   	fill('white');   
   	noStroke();   
   	textSize(30);   
   	textFont("Georgia");   
   	textStyle(ITALIC);   
   	textAlign(LEFT);   
   	text("You looking good today!!",textx,550); 

   	if(textx>600){     
     textx = 0;   
  	}else{     
     textx=textx + 2;   
  }  

}