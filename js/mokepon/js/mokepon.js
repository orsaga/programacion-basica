let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciar = document.getElementById('boton-reiniciar')
    sectionReiniciar.style.display = 'none'
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = " Hipodoge "
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = " Capipepo "
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = " Ratigueya "
    }else{
        alert("Debe seleccionar una mascota")
    }
    seleccionarMascotaEnemigo()
    
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = " Hipodoge "
    }else if(mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML = " Capipepo "
    }else{
        spanMascotaEnemigo.innerHTML = " Ratigueya "
    }
}
function ataqueFuego(){
    ataqueJugador="FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador="AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador="TIERRA"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }else{
        ataqueEnemigo = "TIERRA"
    }
    combate()
}
function combate(){
    if(vidasJugador>0 && vidasEnemigo>0){
        let spanVidasJugador = document.getElementById("vidas-jugador")
        let spanVidasEnemigo = document.getElementById("vidas-enemigo")
        
        if(ataqueJugador == ataqueEnemigo){

        }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else if(ataqueJugador == "AGUA"&& ataqueEnemigo == "FUEGO"){
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        }else{
            crearMensaje("PERDISTE")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }
    }
    revisarVidas()
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES, Ganaste 🤣")
    }else if(vidasJugador == 0){
        crearMensajeFinal("LO SIENTO, Perdiste 😢")
    }
}
function revisarVidas(){

}
function crearMensaje(resultado){
    let  sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + " y la mascota de tu enemigo atacó con "+ataqueEnemigo+" - "+resultado
    sectionMensajes.appendChild(parrafo)
}
function crearMensajeFinal(resultadoFinal){
    let  sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let sectionReiniciar = document.getElementById('boton-reiniciar')
    sectionReiniciar.style.display = 'block'
   
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+1)
}

window.addEventListener('load', iniciarJuego)
