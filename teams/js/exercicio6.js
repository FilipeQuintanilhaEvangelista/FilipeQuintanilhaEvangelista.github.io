function funcao(){
    var fabrica = document.getElementById("entrada").value;
   
    fabrica = parseFloat(fabrica);
    
    var resultado = conta(fabrica);
    alert("o preço final do carro é " +resultado+ " .");
}
function conta(fabrica){
    
    result = fabrica*(128/100);
    return result*(145/100);
}