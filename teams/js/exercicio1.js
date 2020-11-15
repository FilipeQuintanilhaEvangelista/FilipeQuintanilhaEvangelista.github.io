function chamafuncao(){
    var op1 = document.getElementById("entrada1").value;
    var op2 = document.getElementById("entrada2").value;
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    var resultado = soma(op1, op2);
    alert("resultado = " + resultado);
}
function soma(op1,op2){
    return op1 + op2;
}