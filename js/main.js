function evaluar(){
    var valorA = document.getElementById("valor_a").value;
    var valorB = document.getElementById("valor_b").value;
    var parametroNegativo = document.getElementById("parametro").value;
    
    var salida = document.getElementById("salida");
    var salidaDos = document.getElementById("salidaDos");
    
    if (valorA == "" || valorB == ""){
        salidaDos.innerHTML = "Falta llenar";
    }
    else {
        if (parametroNegativo == "1"){
            if(valorA<0 && valorB<0){
                salida.innerHTML = "1";
            }
            else{
                salida.innerHTML = "0";
            }
        }
        if(parametroNegativo == "2"){
            if((valorA<0 && valorB>0)||(valorA>0 && valorB<0)){
                salida.innerHTML = "1";
            }
            else{
                salida.innerHTML = "0";
            }
        }
    }
}
