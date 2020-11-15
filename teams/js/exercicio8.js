function funcao(){
    var f = document.getElementById("entrada").value;
    f=parseFloat(f);
    var resultado=converte(f);
    alert(resultado+" graus celsius");
    
}
function converte(f){
       return 5*(f-32)/9;
        
    }