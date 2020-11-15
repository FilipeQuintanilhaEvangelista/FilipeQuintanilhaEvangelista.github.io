function funcao(){
    var salario = document.getElementById("salario").value;
    var valor = document.getElementById("valorcarro").value;
    var qtd = document.getElementById("qtdcarro").value;
    var total = document.getElementById("total").value;
    salario = parseFloat(salario);
    valor = parseFloat(valor);
    qtd = parseInt(qtd);
    total = parseFloat(total);
    resultado = salariofinal(salario, valor, qtd, total);
    alert("O salario final é " + resultado);

}
function salariofinal(salario, valor, qtd, total){
    return salario + (qtd*valor) + (5/100)*total;
}