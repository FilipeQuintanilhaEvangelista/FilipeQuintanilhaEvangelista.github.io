function funcao(){
    var qtd = document.getElementById("entrada1").value;
   
    qtd= parseInt(qtd);
   
    var resultado = calcula(qtd);
    alert(resultado);
}
function calcula(qtd){
    if(qtd<12)
    return 1.30*qtd;
    else 
    return 1*qtd;
}