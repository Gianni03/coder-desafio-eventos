// variables de elementos html
const saludo = document.querySelector("#saludo")
const cajaNueva = document.getElementById("caja-nueva")
const cambiaFondo = document.getElementById("fondo")
const teclaPresionada = document.getElementById("tecla")


// función que cuando presione el boton ejecute un alert con el saludo

//? function saludar() {
//?     saludo.addEventListener("click", ()=>{alert("Bienvenido Visitante 🖖🏼")})
//? }  no funciono así 

// const saludar = ()=>{
//     saludo.addEventListener("click", alert("Bienvenido Visitante 🖖🏼"))
// }  TAMPOCO
const saludar = 
    saludo.addEventListener("click", ()=>{alert("Bienvenido Visitante 🖖🏼")})


// funcion que genera un div con una clase cada vez que de presiona el boton
let CrearCaja = document.getElementById("caja")
caja.addEventListener("click", ()=>{
    let nueva = document.createElement("div")
    nueva.className = "caja-nueva"
    cajaNueva.append(nueva)
})

// funcion que cambia el color de fondo cuado se pasa con el mouse por encima
// lo cambie a click por si estaba mal el mouseover

const background = ()=>{
    const body = document.getElementsByTagName("body")
    cambiaFondo.addEventListener("click", ()=> {
    body.className = "cambio-fondo"})
}

// escribir una letra o numero y mostrarla en pantalla

const mostrar = ()=> {
    teclaPresionada.addEventListener("keydown", ()=>{
        let linea = document.getElementById("linea-texto");
        linea.innerText = teclaPresionada
    })
}

