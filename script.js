

// Creamos una función que tenga 3 variables
function calcularEdad(){
    //Creamos una variable que capture el dato ingresado en el dato ingresado por el cliente con el metodo get element usando .Value para tomar el valor numerico
    let yearNacimiento = document.getElementById("year").value 
    // Crea un objeto que toma la fecha actual (fecha y hora) por medio de new Date y al usar el metodo getfullyear unicamente tomamos el año 
    let yearActual = new Date().getFullYear();
    // Restamos las dos variables anteriores.
    let edad = yearActual - yearNacimiento;


//Creamos una condicion para validar el input ingresado, *si* el usuario no ingresa nada "" o escribe un valor mayor === al actual mostramos un error.
    if (yearNacimiento === "" || yearNacimiento > yearActual ){
    //Imprime en el campo P "resultado" el mensaje solicitando al usuario ingresar un dato valido 
        document.getElementById("resultado").innerText = "Por favor ingresa un año valido ❗.";
    //Si no es es mayor o igual al año, entonces, muestra en el campo P "Resultado" la variable guardada edad concatenada con el texto. 
    } else{
        document.getElementById("resultado").innerText= "Tu edad es: "+ edad + " años.";
    }
}