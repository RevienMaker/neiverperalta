const titulo = document.getElementById('titulo');
const elemento = document.getElementById('skill-group1');
const elemento2 = document.getElementById('skill-group2');
const personajeAnim = document.getElementById('anim-personaje');
const escritorio = document.getElementById('escritorio');

const cargarImagen = (entradas, observador) => {

    entradas.forEach( (entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        } else{
            entrada.target.classList.remove('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});

observador.observe(elemento);
observador.observe(elemento2);
observador.observe(titulo);
observador.observe(personajeAnim);
observador.observe(escritorio);