class Figuras{


    constructor(posX,posY,tam,vel1,vel2){
        this.posX=posX;
        this.posY=posY;
        this.tam=tam;
        this.vel1=vel1;
        this.vel2=vel2;

    }

    mover(){


    }

    getPosx(){
        return this.posX;
    }
      
    getPosy(){
        return this.posY;
    }
    
    getVel2(){
        return this.vel2;
    }
    
    getTam(){
        return this.tam;
    }

    getVel1(){
        return this.vel1;
    }

    setTam(){
       this.tam=this.tam*2;

    }
}

