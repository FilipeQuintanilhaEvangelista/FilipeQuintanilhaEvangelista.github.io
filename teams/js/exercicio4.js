function funcao(){
    var b = document.getElementById("entrada1").value;
    var c = document.getElementById("entrada2").value;
    b = parseInt(b);
    c = parseInt(c);
     resultado = hipo(b,c);
    alert("A hipotenusa é " + resultado);
}
function hipo(num1,num2){
    
    var hipotenusa = Math.sqrt(Math.pow(num1,2)+Math.pow(num2,2));
    return hipotenusa;
}