// Mensaje de Bienvenida + preguntar nombre.

function nombre(){

    var nombre = prompt("Como quieres que se llame el logo?");
    document.getElementById("logo").innerHTML =  nombre;

}

    function sumar(){

        var num1 = Number(prompt("Dime un numero"));
        var num2 = Number(prompt("Dime otro numero"));
        var res = num1 + num2;

        window.alert( "El resultado es "+ res);
    }

    function preguntar(){

        var nombre = prompt("Como te llamas?");
        var edad = prompt("Cuantos años tienes?");
        var pais = prompt("De que país eres?");
        
        window.alert("Hola, " + nombre + " me alegra saber que tienes " + edad + " años." + " Una cosa, y es que también soy de " + pais);

    }
