document.querySelector('.tecla_pom');
document.querySelector('.tecla_clap');
document.querySelector('tecla_tim');
document.querySelector('tecla_puff');
document.querySelector('tecla_splash');
document.querySelector('tecla_toim');
document.querySelector('tecla_psh');
document.querySelector('tecla_tic');
document.querySelector('tecla_tom');

function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
} 

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
} 

document.querySelector('.tecla_pom').onclick = tocaSomPom;

document.querySelector('.tecla_clap').onclick = tocaSomClap;