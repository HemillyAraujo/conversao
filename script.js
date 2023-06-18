
function converterUnidades () {
    var numero = document.querySelector('#numero').value; 
    var UnidadeEntrada = document.querySelector('#unidade1').value;
    var UnidadeSaida = document.querySelector('#unidade2').value;

    var Resultado;

    if (UnidadeEntrada === "cm" && UnidadeSaida === "m"){
        Resultado = numero/100;
        valor.textContent = Resultado;
    }

    else if (UnidadeEntrada === "cm" && UnidadeSaida === "q"){
        Resultado = numero/100000;
        valor.textContent = Resultado;
    }

    else if (UnidadeEntrada === "cm" && UnidadeSaida === "mm"){
        Resultado = numero*10;
        valor.textContent = Resultado;
    }

    else if (UnidadeEntrada === "cm" && UnidadeSaida === "p"){
        Resultado = numero/2.54;
        valor.textContent = Resultado;
    }

    else if (UnidadeEntrada === "mm" && UnidadeSaida === "m"){
        Resultado = numero/1000;
        valor.textContent = Resultado;
    }

    else if (UnidadeEntrada === "mm" && UnidadeSaida === "q"){
        Resultado = numero/1000000;
        valor.textContent = Resultado;
    }

    else if (UnidadeEntrada === "mm" && UnidadeSaida === "cm"){
        Resultado = numero/10;
        valor.textContent = Resultado;
    }

    else if (UnidadeEntrada === "mm" && UnidadeSaida === "p"){
        Resultado = numero/25.4;
        valor.textContent = Resultado;
    }

    else if (UnidadeEntrada === "p" && UnidadeSaida === "m"){
        Resultado = numero*0.0254;
        valor.textContent = Resultado;
    }

    else if (UnidadeEntrada === "p" && UnidadeSaida === "q"){
        Resultado = numero*0.0000254;
        valor.textContent = Resultado;
    }

    else if (UnidadeEntrada === "p" && UnidadeSaida === "cm"){
        Resultado = numero*2.54;
        valor.textContent = Resultado;
    }

    else if (UnidadeEntrada === "p" && UnidadeSaida === "mm"){
        Resultado = numero*25.4;
        valor.textContent = Resultado;
    }
}
