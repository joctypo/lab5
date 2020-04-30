class Exception{
    constructor(){


    }

error(){
    try{

    if (numero <= 0 || numero >= 11){

    throw "Solo está permitido números entre 1 y 10 ";
    }
    }catch (error){
    alert ("Error"+ error);
    }

}

error2(){
    try{

    if (figuras.length >9 || figuras2.length >9){

    throw "Esta en el maximo que se pueden agregar ";
    }
    }catch (error2){
    alert ("Error"+ error2);
    }

}

error3(){

    try{

        if (figuras.length < 1 || figuras2.length< 1){
    
        throw "Esto es lo minimo que puede eliminar ";
        }
        }catch (error3){
        alert ("Error"+ error3);
        }


}


}

