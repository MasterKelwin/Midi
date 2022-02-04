const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idAudio){
    const elemento = document.querySelector(idAudio)

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
        }else{
            alert('Elemento não encontrado ou seletor inválido');
        }

} 

for (i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(evento){
        //console.log(evento.code)
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

