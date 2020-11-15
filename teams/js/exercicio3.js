function funcao(){
    var num = document.getElementById("numero").value;
    var resultado = numPrimo(num);
    alert (resultado)
}


function numPrimo(num) {
    
    if (num == 2)
        return "O número "+num+" é primo.";
    else
        if (num%2==0){
                return "O número "+num+" não é primo.";
                
            }
            else
                 return "O número "+num+" é primo.";
    
}