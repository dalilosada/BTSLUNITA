let nombre= "Dali";
let apellido= "Losada";
let saludo = ("Hola, mi nombre es " + nombre + " " + apellido)
let seriefavorita= "Greys Anatomy"


console.log ("Hola, mi nombre es " + nombre + " " + apellido )
console.log ("Mi serie favorita es " + seriefavorita)
console.log ("Hola, mi nombre es " + nombre + " " + apellido)
console.log( saludo )
let a = 2;
let b = 3;
 console.log(a,b)

function saludar(arg1,arg2){
  console.log ( "soy " + arg1 + " " + arg2)
}

saludar (nombre,apellido)

nombre + apellido
nombre-apellido

let string1 = "Cadena de caracteres"
typeof string1
let number1 = 23
typeof number1
let number2 = "23"
typeof number2

number1 == number2 

//porque no compara exactamente entonces dice true

number1 === number2

//porque compara exactamente

number1 + number2

//numero concateno

string1 + " " + number1

number2 + number1
number2 - number1
string1 * number1
number2 * number1

let booleand1 = false
let booleand2 = true
typeof booleand1

//el true y el false son datos booleanos

if (number2 > 5) {
console.log("El número es mayor a 5");
} else if(number2 < 5) {
console.log("El número es menor a 5");
} else {
console.log("El número es igual a 5");
}

//si el num es mayor a cinco ejecuta lo que hay entre corchetes, y number 2 es mayor a cinco. Si no le pongo nada no ejecuta nada.En cambio si le pongo un else, tiene chance de que de otra cosa. Pero si pongo true o false, lo otro no se ejecuta

let d = 1

if (d < 5) {
if (d === 1) {
console.log("El número es menor a 5 y es 1");
} else {
console.log("El número es menor a 5, pero no es 1");
}
}
//no puede haber un else sin un if, si un if sin un elsa

let edad = 17;
let esMayorEdad = edad > 18 ? true : false; 
// if (edad > 18) {esMayorEdad = true }else{ esMayorEdad= false }
console.log  (esMayorEdad)

let arr= []
console.log (arr)
let arr2= ["Ana", "Florencia", "Brenda", "Diego", "Camila"]
console.log (arr2)
console.log (arr2[0])
console.log (arr2[3])
console.log(arr2.length) 
//len + gallina + tiene + huevos
/*let datos = [‘dato1’, ‘dato2’, ‘dato3’];
console.log(datos[0]); 
*/
console.log (arr2 [arr2.length-1])
let ultimoelemento = arr2.pop ()
arr2.push (ultimoElemento)
// con pop sacamos el ultimo elemento. con push lo volvemos a poner
console.log(arr2)
arr2.unshift ( ultimoElemento)
console.log (arr2)

let f= [1,23,5,1,5]
console.log (a.length && true)
console.log (a.lenght && a)

// let otra= "function"
// //palabra clave | nombre | parámetro/s | código entre llaves {}
// function suma (a,b){
//   console.log(a)
//   console.log (b)
//   return (a+b)
// }
// // return devuelve algo de una funcion
// let resultado= suma (5,6)
// let resultado2= suma (20,6)
// let resultado3= suma (30,6)
// let resultado4= suma (40,6)



// console.log(resultado)

function saludar(nombre,apellido){

    if(nombre == "23" ){
      
  
    return ` Bienvenido a la programación  ${nombre} ${apellido} `
    }else{
      
      return "Hola2"
    console.log ("Hola2")
  }
  }
  let resultado= saludar("23", "Losada")
  // let resultado2= saludar ("Brenda", "Arreguez")
  // let resultado3= saludar ("Florencia", "Bucardo")
  // let resultado4= saludar ("Diego", "Lapadula")
  
  // console.log(resultado)
  // console.log(resultado2)
  // console.log(resultado3)
  // console.log(resultado4)

  let arr= ["Camila", "Juana", "Valentina"]
let gato = {
  color: "Naranja", 
  pelo: "corto",
  ronronear: function (){
  console.log("rrrrr")
}
}
arr.length
gato.color
gato.pelo
gato.ronronear()
// con los parentesis ejecuto la funcion de ronronear, si no solo aparece que es una funcion y que hace rrrr

let DOM = {
  head: {
    title: "Mi pagina",
    meta: "UTF-8"
  },
body:{
  h1: "titulo",
  p:"tortas"
}
}

DOM.head.title