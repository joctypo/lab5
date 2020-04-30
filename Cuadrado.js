class Cuadrado extends Figuras{

    constructor(posX,posY,tam,vel1,vel2){
        super(posX,posY,tam,vel1,vel2);
        

    }


    mover(){

        this.posX += this.vel1;
        if((this.posX > 480)|| (this.posX < 20) ){
            this.vel1 *= (-1);
            
        }
    
        
    }
}