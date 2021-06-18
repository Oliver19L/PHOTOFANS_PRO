var maximo, nmedio, reproducir, barra, progreso, silenciar, volumen, bucle;

function iniciar ()
    {
        maximo= 400; nmedio= documement.getElementByld('medio');
        reproducir= document.getElementByld('reproducir');
        barra= document.getElementByld('barra');
        progreso= document.getElementByld('progreso');
        silenciar= document.getElementByld('silenciar');
        volumen= document.getElementByld('volumen');
        reproducir.addEventListener('click', cambiar);
        silenciar.addEventListener('click', sonido); silenciar.addEventListener('click', sonido); 
        volumen.addEventListener('change', nivel); 
    }

    //Reproduciendo y pausando el video

function cambiar()
    {
        if(!mmedio.paused && !mmedio.ended)
        { mmedio.pause();	reproducir.value = '>'; clearlnterval(bucle); }   
        else{ mmedio.play(); reproducir.value = 'Pausa'; 
        bucle = setlnterval(estado, 1000); }

    }


//Actualizando la barra de progreso

function estado()
    {
        if(!mmedio.ended)
            { var tamano = parselnt(mmedio.currentTime * maximo / mmedio.duration); progreso.style.width = tamano + 'px'; } 
        else
        { progreso.style.width = 'Opx'; reproducir.innerHTML = clearlnterval(bucle); }

    }

//Reproduciendo el video desde la posición seleccionada por el usuario

function mover(e)
    {
        if(!mmedio.paused && !mmedio.ended)
        { var ratonX = e.pageX - barra.offsetLeft; 
            var nuevotiempo = ratonX * mmedio.duration / maximo; 
            mmedio.currentTime = nuevotiempo; 
            progreso.style.width = ratonX + 'px'; } 
    }

//Activando o desactivando el sonido con la propiedad muted

function sonido()
    {
        if(silenciar.value =='Mudo')
        { mmedio.muted = true; silenciar.value = 'Audio';}

        else{ mmedio.muted = false; silenciar.value = 'Mudo'; }
    }

//controlando el volumen

function nivel()
    { mmedio.volume = volumen.value; }
