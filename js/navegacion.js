const btnAbrirNav = document.getElementById('btn-abrir-nav');
const btnCerrarNav = document.getElementById('btn-cerrar-nav');
const navegacion = document.getElementById('nav');
btnAbrirNav.addEventListener('click', () => {
    navegacion.classList.toggle('navegacion-activa');
    btnAbrirNav.classList.toggle('btn-desactivar');
    btnCerrarNav.classList.toggle('btn-desactivar');
})
btnCerrarNav.addEventListener('click', () => {
    navegacion.classList.toggle('navegacion-activa');
    btnCerrarNav.classList.toggle('btn-desactivar');
    btnAbrirNav.classList.toggle('btn-desactivar');
})