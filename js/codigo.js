let jugador = 0
let pc = 0
let ganadas = 0
let perdidas = 0
let resta = 0
//obtener numero aleatorio para la variable pc
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//Asignar una jugada a un numero
function eleccion(jugada){
    let resultado = ""
    jugada == 1 ?  resultado = "Piedra 🥌":
        jugada == 2 ? resultado = "Papel 🧻":
            jugada == 3 ? resultado = "Tijera ✂":
                resultado = "Elegiste mal"
    return resultado
}
//Logica del combate
function combate(jugdor, pc){
    let mensaje = ""
    resta = jugador - pc
    resta == 0 ? mensaje = "Empate":
        resta == 1 || resta == -2 ? (mensaje = "Ganaste ", ganadas ++):
            (mensaje = "Perdiste ", perdidas ++)
    return mensaje
}
//loop para jugar hasta ganar o perder tres veces
while(ganadas<3 && perdidas <3){
    jugador=prompt("Elige tu opcion")
    pc = aleatorio(1,3)
    alert("Elegiste "+eleccion(jugador))
    alert("El pc eligio "+eleccion(pc))
    alert(combate(jugador, pc))
}
alert("Ganaste" +ganadas+" veces perdiste " +perdidas + "veces. ")