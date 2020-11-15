function chamafuncao(){
    var op1 = document.getElementById("entrada1").value;
    var op2 = document.getElementById("entrada2").value;
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    var resultado = compara(op1, op2);
    alert( resultado );
}
function compara(op1,op2){
    if(op1>op2)
     return op1 + " é maior que " + op2;
    else
        if (op2>op1)
        return op2 + " é maior que " + op1;
        else 
        return "os numeros são iguais";
}