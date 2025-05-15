/*//1. Definir una variable numérica, asignarle un valor y sumarle 5
var num = 3
num += 5

//2. Definir dos variables de cadenas, asignarles valores y concatenarlas
var cadena_1 = 'Hola'
var cadena_2 = ' profe!'
var cadena_completa = cadena_1 + cadena_2 

//3.Evaluar si dos números son iguales, diferentes, mayor o menor. Resolver utilizando “if”/”else”.
var num1 = 3
var num2 = 89

if( num1 == num2) {
    console.log('num1 = num2')
}
else{
    console.log('num1 != num2')

    if( num1 > num2) {
    console.log('num1 > num2')
    }
    else{
        console.log('num1 < num2')
    }
}

//4. Utilizando “switch”. Definir una variable numérica. Asignarle un valor entre 1 y 10; mostrar a qué grupo pertenece: 
// ○ Grupo 1: del 1 al 3 
// ○ Grupo 2: del 4 al 6
// ○ Grupo 3: del 7 al 10
// Modifiquemos el ejercicio para que el número lo ingrese el usuario (con “prompt”).
let n = prompt("Ingresa un número del 1 al 10");
while (n < 1 || n > 10){
    n = prompt("Ingresa un número del 1 al 10");
}
switch (parseInt(n)) {
    case 1:
        console.log('Grupo 1');
        break;
    case 2:
        console.log('Grupo 1');
        break;
    case 3:
        console.log('Grupo 1');
        break;      
    case 4:
        console.log('Grupo 2');
        break;
    case 5:
        console.log('Grupo 2');
        break;
    case 6:
        console.log('Grupo 2');
        break;
    case 7:
        console.log('Grupo 3');
        break;
    case 8:
        console.log('Grupo 3');
        break;
    case 9:
        console.log('Grupo 3');
        break;
    case 10:
        console.log('Grupo 3');
        break;
}

//5.Realizar la sumatoria de 0 a 10 y devolver el valor de la misma
let suma = 0
for (i=1; i<=10; i++) {
    suma += i
}
console.log(suma)

//6. Generar un array con 10 números, recorrerlo e ir multiplicando todos los elementos, finalmente obtener el producto total.
let lista=[1,2,3,4,5,6,7,8,9,10]
let producto = 1
for (i=0; i<lista.length; i++){
    producto = producto * lista[i]
}

//7. Crear una función que reciba dos valores y retorne el producto de los mismos
function productoF(n1, n2){
    return n1*n2;
}

//8. Crear una función que reciba dos cadenas y retorne la concatenación de la misma.
function concatenar(cadena_1, cadena_2){
    return cadena_1+cadena_2;
}

//9. Crear una función, a partir de la lógica aplicada en ejercicio 3, que reciba dos valores y muestre cuál es el mayor. En caso de ser iguales, deberá indicarlo.
function mayor(num1, num2){
    if( num1 == num2) {
        console.log('num1 = num2')
    }
    else if( num1 > num2) {
        console.log('num1 > num2')
    }
    else{
        console.log('num1 < num2')
    }  
}

//10. Crear una función que reciba un número y muestre tantos asteriscos como la cantidad de veces que se pasó como parámetro.
function asteriscos(n){
    let cadena = "";
    for (i=0; i<n; i++){
        cadena = cadena + "*";
    };
    console.log(cadena);
};

//11. Crear una función que reciba el monto de un producto, y el medio de pago: C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito).
// Si el monto del producto es menor a $200 no se aplicará ningún descuento, pero si el monto a abonar es entre $200 y $400 se aplicará un descuento del 30% si el medio de pago es efectivo, 20% si se realiza con débito y 10% con tarjeta de crédito.
// Para montos mayores a $400, el descuento es el mismo sin importar el medio de pago, dicho descuento es del 40%.
// La función deberá retornar el monto final a abonar.
function descuento(monto, medio_pago){
    if ( monto > 200 && monto < 400){
        switch(medio_pago.toUpperCase()){
        case 'C':
            monto = Math.round(monto * 0.9);
            break;
        case 'E':
            monto = Math.round(monto * 0.7);
            break;
        case 'D':
            monto = Math.round(monto * 0.8);
            break;
        }
    }
    else if (monto > 400){
        monto = Math.round(monto * 0.6);
    }
    return monto;
}
*/
//12. Crear una función que reciba un número que represente la altura de un medio-árbol.
// Deberá generar de manera escalonada el mismo. Ejemplo: si la altura es 5 deberá mostrar:
// *
// * *
// * * *
// * * * *
// * * * * *
function medioArbol(altura){
    let arbol = ""
    for (i=1; i <= altura; i++){
        arbol += "*".repeat(i) + "\n";
    }
    return arbol;
}

//13. Crear una función que reciba un número que indica el día de la semana y retorne una cadena de texto indicando a qué día corresponde. Ejemplo: si es 1, deberá retornar lunes, 2 retornará martes, y así siguiendo. Si el día es 6 o 7 deberá retornar “fin de semana”. En caso de un valor que no represente un día de la semana deberá retornar un mensaje de error.
function diaSemana(dia){
    switch (dia){
        case 1:
            console.log('Lunes');
            break;
        case 2:
            console.log('Martes');
            break;
        case 3:
            console.log('Miércoles');
            break;
        case 4:
            console.log('Jueves');
            break;
        case 5:
            console.log('Viernes');
            break;
        case 6:
            console.log('fin de semana');
            break;
        case 7:
            console.log('fin de semana');
            break;
        default:
            console.log('Error');
            break;
    }
}
/*
//14. Crear una función que genere un array de varios elementos numéricos y muestre por pantalla el promedio de esos números. El tamaño y los valores deben ser ingresados por el usuario (comando prompt) en dicho orden. 
//TIP: El dato ingresado con prompt es de tipo string, usar split() para quitar los espacios y usar la función Number para transformarlo.
function promedio(){
    let tamanio=prompt('Ingrese el tamaño del array: ');
    let valores=prompt('Ingrese los valores del arreglo:');
    let suma = 0
    let numeros = [];
    valores=valores.split(" ");
    for (i=0; i<tamanio; i++){
        numeros[i]=Number(valores[i]);
        suma += numeros[i];
    }
    console.log(suma/tamanio);
}
*/
//15. Utilizar la función que genera el medio-árbol (ejercicio 12): crear un campo de entrada que le permita al usuario ingresar la altura del mismo. Incluir un botón que al presionarlo, invoque a la función generada previamente con el valor ingresado por el usuario para que la misma muestre el medio-árbol.
// Deberá incluir validación de datos ingresados por el usuario.
/*
function generarArbol() {
      const input = document.getElementById("altura").value;
      const resultado = document.getElementById("resultado");
      const altura = parseInt(input);

      if (isNaN(altura) || altura <= 0) {
        resultado.textContent = "Por favor, ingrese un número entero mayor a 0.";
        return;
      }
      resultado.textContent = medioArbol(altura);
}
*/
//16. Desarrollemos un portero eléctrico:
// ○ Tendrá dos visores, de dos posiciones el piso y una posición para dpto. Los pisos van del 00 al 48. Los dptos, del 1 al 6.
// ○ El botón llamar, muestra el mensaje de abajo. El botón borrar limpia los visores y el mensaje de abajo.
// ○ Si se hace referencia a un piso y/o dpto que no existe, mostrar el error en el visor de abajo.
/*let input = "";

function actualizarVisores() {
  const piso = input[0] ? input[0] : "";
  const piso2 = input[1] ? input[1] : "";
  document.getElementById("piso").textContent = piso + piso2;
  document.getElementById("dpto").textContent = input[2];
}

function agregarNumero(num) {
    if (input.length < 3) {
        input += num.toString();
        actualizarVisores();
    }
}

function borrar() {
    input = "";
    actualizarVisores();
    document.getElementById("mensaje").textContent = "";
}

function llamar() {
  if (input.length < 3) {
    document.getElementById("mensaje").textContent = "⚠️ Ingrese un piso y un dpto.";
    return;
  }
  const piso = parseInt(input.slice(0, 2));
  const dpto = parseInt(input[2]);
  if (piso < 0 || piso > 48 || dpto < 1 || dpto > 6) {
    document.getElementById("mensaje").textContent = "❌ Piso o dpto inexistente.";
    return;
  }
  document.getElementById("mensaje").textContent = `✅ Llamando al piso ${piso.toString().padStart(2, "0")}, dpto ${dpto}`;
}

//17. Desarrollemos un teclado en pantalla:
// ○ Cada línea del teclado debe hacerse en un array.
// ○ Al presionar cada tecla (botón) deberá mostrarse en el display.
// ○ La muestra estará centralizada en una sola función.
// ○ Debe existir un botón para borrar el display.
// ○ Botón Backspace.*/

let input = "";

let filas = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
    ["z", "x", "c", "v", "b", "n", "m"]
]

function agregarCaracter(fila, caracter){
    input += filas[fila][caracter];
    document.getElementById("visor").textContent = input;
}

function borrar() {
    input=input.substring(0, input.length -1)
    document.getElementById("visor").textContent = input;
    return input;
}
