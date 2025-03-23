document.addEventListener("click", function() {
    var audio = document.getElementById("audio");
    audio.play();
}, { once: true }); 
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
        }, 900);
    }
/*
    function iluminar(color) {
        const boton = $("#" + color);
        const original = color;
        const fuerte = color + "fuerte";
    
        boton.attr("id", fuerte);
    
        setTimeout(() => {
            $("#" + fuerte).attr("id", original);
        }, 900);
    }
  */
    function iluminar(color) {
        const boton = $("#" + color);
        
        boton.addClass("iluminado");
    
        setTimeout(() => {
            boton.removeClass("iluminado");
        }, 500);
    }
      

    $(".boton").click(function() {
        if (!puedeJugar) return;

        const colorSeleccionado = $(this).attr("id");
        jugador.push(colorSeleccionado);
        iluminar(colorSeleccionado);

        const index = jugador.length - 1;
        if (jugador[index] !== secuencia[index]) {
            alert("PERDISTE :" + nivel);
            $(".empezar").text("EMPEZAR"); 
            return;
        }

        if (jugador.length === secuencia.length) {
            setTimeout(() => siguienteTurno(), 900);
        }
    });
    setTimeout(function() {
   $("#pantallacarga").fadeOut(50);
    }, 3000); 
});