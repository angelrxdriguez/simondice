$(document).ready(function() {
    const colores = ["rojo", "verde", "azul", "amarillo"];
    let secuencia = [];
    let jugador = [];
    let nivel = 0;
    let puedeJugar = false;

    $(".empezar").click(function() {
        iniciarJuego();
    });

    function iniciarJuego() {
        secuencia = [];
        jugador = [];
        nivel = 0;
        $(".empezar").addClass("empezado"); 
        siguienteTurno();
    }

    function siguienteTurno() {
        jugador = [];
        nivel++;
        const aleatorio = colores[Math.floor(Math.random() * 4)];
        secuencia.push(aleatorio);
        juego();
    }

    function juego() {
        puedeJugar = false;
        let i = 0;
        const intervalo = setInterval(function() {
            const color = secuencia[i];
            iluminar(color);
            i++;
            if (i >= secuencia.length) {
                clearInterval(intervalo);
                puedeJugar = true;
            }
        }, 800);
    }

    function iluminar(color) {
        const $boton = $("#" + color);
        const idOriginal = color;
        const idFuerte = color + "fuerte";
    
        $boton.attr("id", idFuerte);
    
        setTimeout(() => {
            $("#" + idFuerte).attr("id", idOriginal);
        }, 300);
    }
    

    $(".boton").click(function() {
        if (!puedeJugar) return;

        const colorSeleccionado = $(this).attr("id");
        jugador.push(colorSeleccionado);
        iluminar(colorSeleccionado);

        const index = jugador.length - 1;
        if (jugador[index] !== secuencia[index]) {
            alert("¡Game Over! hiciste:" + nivel);
            $(".empezar").text("EMPEZAR"); 
            return;
        }

        if (jugador.length === secuencia.length) {
            setTimeout(() => siguienteTurno(), 500);
        }
    });
});