// pong par Léon
// version solo (pas d'ordi)
// 9.3.2022


noStroke();


var balleX = random(0,400);
var balleY = random(0,325);

var vitesseX = 1;
var vitesseY = 1;

var largeurCurseur = 39;
var hauteurCurseur = 340;
var score = 0;

var vitesseMax = 6.5;

var checkColision = function() {
    
    //curseur joueur
    if (balleX >= mouseX && balleX <= mouseX + largeurCurseur && balleY >= hauteurCurseur && balleY <= hauteurCurseur+10) {
        
        //partie gauche
        if (balleX < mouseX+10){
            if (vitesseX > 0) {
                vitesseX = 0 - vitesseX;
            }
        }  

        //partie droite
        if (balleX > mouseX+largeurCurseur-10){
            if (vitesseX < 0) {
                vitesseX = 0 - vitesseX;
            }
        }
        
        
        
        vitesseY = 0 - vitesseY;
        playSound(getSound("rpg/hit-clop"));
       balleY = hauteurCurseur;
       score++;
       vitesseY -= 0.35;
       
       if (vitesseX > 0 && vitesseX <= vitesseMax) {
        vitesseX += 0.35;
       } else {
            if (vitesseX >= -vitesseMax) {
                vitesseX -= 0.35;
            }
       }
    }
    
    //mur gauche
    if (balleX <= 0){
        vitesseX = 0 - vitesseX;
        playSound(getSound("rpg/hit-clop"));
    }
    
    //mur droit
    if (balleX >=400){
        vitesseX = 0 - vitesseX;
        playSound(getSound("rpg/hit-clop"));
    }
    
    //plafond
    if (balleY <=0){
        vitesseY = 0 - vitesseY;
        playSound(getSound("rpg/hit-clop"));
    }
    
    //gameOver
    if (balleY >= 400 ){
    background(0, 0, 0);
    fill(255, 0, 0);
    textSize(56);
    text("game over",70,182);
    text("score: "+ score,92,254);
    vitesseX = 0;
    vitesseY = 0;
    } 
};



draw = function() {
    noStroke();
    background(0, 0, 0);
    fill(255, 255, 255);
    
    //balle
    ellipse(balleX,balleY,10,10);
    
    //curseur
    rect(mouseX,hauteurCurseur,largeurCurseur,10,10);
    balleX += vitesseX;
    balleY += vitesseY;
    
    checkColision();
 
};
