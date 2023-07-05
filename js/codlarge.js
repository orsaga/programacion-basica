function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(jugada) {
    resultado = ""
    if (jugada == 1) {
        resultado = "piedra 🥌"
    } else if (jugada == 2) {
        resultado = "papel 🧻"
    } else if (jugada == 3) {
        resultado = "tijera ✂"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado
}
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
while(triunfos<3 && perdidas<3){
    pc = aleatorio(1, 3)
    jugador = prompt("1 para Piedra, 2 para papel, 3 para tijera")

    alert("pc elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))
    combate(pc, jugador)

    function combate(pc, jugador){
        // COMBATE
        if (pc == jugador) {
            alert("EMPATE")
        } else if (jugador == 1 && pc == 3) {
            alert("GANASTE")
            triunfos = triunfos + 1
        } else if (jugador == 2 && pc == 1) {
            alert("GANASTE")
            triunfos = triunfos + 1
        } else if (jugador == 3 && pc == 2) {
            alert("GANASTE")
            triunfos = triunfos + 1
        }
        else {
            alert("PERDISTE")
            perdidas = perdidas + 1
        }
    }
    
} 
alert("Ganaste: "+triunfos+ " veces. perdidas "+perdidas+" veces.")
