function funcao(){
    var salario = document.getElementById("entrada1").value;
    var reajuste = document.getElementById("entrada2").value;
    salario = parseFloat(salario);
    reajuste = parseInt(reajuste);
    var resultado = conta(salario,reajuste);
    alert(resultado);
}
function conta(salar,reajus){
    return salar*((100+reajus)/100);
}