let pantalla=0;
let numero=0;
let mas,menos,continuar,boton1,boton2,boton3,boton4;
let error,error2,error3;
let figuras,figuras2;
let tamano;
let marcado=0;
let marcado2=0;


function setup(){
createCanvas(500,500);
mas=loadImage("../imagenes/mas.png");
menos=loadImage("../imagenes/menos.png");
continuar=loadImage("../imagenes/continuar.png")
boton1=loadImage("../imagenes/agregar.png")
boton2=loadImage("../imagenes/eliminar.png")
boton3=loadImage("../imagenes/duplicar.png")
boton4=loadImage("../imagenes/bolitas.png")
figuras = [];
figuras2= [];
error = new Exception();
error2 = new Exception();
error3= new Exception();
tamano=40;
}

function draw(){

background(200);

switch(pantalla){

    case 0:
        image(mas,350,192);
        image(menos,111,192);
        image(continuar,178,338);
        textSize(50);
        text(numero,240,242);
        //text("X"+mouseX+"   Y"+mouseY,mouseX,mouseY);
    break;

    case 1: 
        image(boton1,50,450);
        image(boton2,150,450);
        image(boton3,250,450);
        image(boton4,350,450);


        

        pintasformas();

        

        for(let i=0;i< figuras.length;i++){
            
            dibujarformas(figuras[i]);
            figuras[i].mover();

        }

        for(let k=0;k< figuras2.length;k++){
            
            dibujarformas2(figuras2[k]);
           figuras2[k].mover();

        }

    break;


}

}

function pintasformas(){


  for (let j=0;j<numero;j++){
      if (marcado==0){
        figuras.push(new Cuadrado(random(25, 475), random(25, 200), tamano, 5,5));
      }

      if (j==(numero-1)){

        marcado=1;
      }
  }

       
    

}

function dibujarformas(arreglito){

    if (arreglito){

        fill (0);
        x=arreglito.getPosx();
        y=arreglito.getPosy();
        tami=arreglito.getTam();
        rect(x,y,tami,tami);


    }
    
}

function dibujarformas2(arreglit){

    if (arreglit){

        fill (0);
        x=arreglit.getPosx();
        y=arreglit.getPosy();
        tami=arreglit.getTam();
        console.log(tami);
       ellipse(x,y,tami,tami,0);


    }
    
}

function mouseClicked(){
// restar
if(mouseX>111 && mouseX<161 && mouseY>192 && mouseY<242 && pantalla==0){
    if (numero>0){
        numero=numero-1;

    }

}
// Agregar
if (mouseX>350 && mouseX<400 && mouseY>192 && mouseY<242 && pantalla==0){

    if (numero <10){

        numero=numero+1;
    }
}
//Continuar
if (mouseX>178 && mouseX<328 && mouseY>338 && mouseY<388 && pantalla==0){
     if (numero > 0 && numero <11){
    pantalla+=1;

     }   

    if (numero <= 0 || numero >= 11 ){

    error.error();
    console.log(pantalla);
    
     }

}
//Boton 1
if (mouseX>50 && mouseX<150 && mouseY>450 && mouseY<500 && pantalla==1){

    if (figuras.length<10){
    figuras.push(new Cuadrado(random(25, 475), random(25, 200), tamano, 5,5));
    //console.log("Holi");
}

    if (figuras2.length<10 && marcado2==1){
        figuras2.push(new Circulo(random(25, 475), random(250, 450), tamano, 5,5));
       // console.log("Holi");
    }

    if (figuras.length==10){

        error2.error2(); 
        }
}
// Boton 2
if (mouseX>150 && mouseX<250 && mouseY>450 && mouseY<500 && pantalla==1){
    if (figuras.length==0){

        error3.error3(); 
        }
    if (figuras.length>0){
    figuras.pop();
   // console.log("bye");
}
if (figuras2.length>0 && marcado2==1){
    figuras2.pop();
   // console.log("bye");
}


}
// Boton3
if (mouseX>250 && mouseX<350 && mouseY>450 && mouseY<500 && pantalla==1){
    console.log("jumm");
    figuras.forEach(element=> {
       
        element.setTam();
    });
if(marcado2=1){
    figuras2.forEach(element=> {
       
        element.setTam();
    });}
}
// Boton4
if (mouseX>350 && mouseX<450 && mouseY>450 && mouseY<500 && pantalla==1){


    if (marcado2==0){

    figuras2=figuras.map(element=>{

        return element= new Circulo(random(25, 475), random(250, 450), tamano, 5,5);

    });

    
    
        
        marcado2=1;
    }
    
    
}

}

