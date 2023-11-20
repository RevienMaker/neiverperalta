const modal = document.getElementById('modal');

const proyecto1 = document.getElementById('proyecto1');
const proyecto2 = document.getElementById('proyecto2');
const proyecto3 = document.getElementById('proyecto3');
const proyecto4 = document.getElementById('proyecto4');
const proyecto5 = document.getElementById('proyecto5');
const proyecto6 = document.getElementById('proyecto6');

proyecto1.addEventListener('click', () =>{
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-contenedor">
        <div class="modal-proyecto">
            <div class="modal-proyecto__img">
                <img src="./images/RevNotes2.png" alt="imagen del proyecto">
            </div>

            <div class="texto-contenedor">
                <h2 translate="no">RevNotes</h2>

                <p>Notepad FulStack website, made with MongoDB, NodeJS, Tailwind, SASS, React</p>

                <div class="links">
                    <a href="https://github.com/RevienMaker/revnotes-frontend" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <a href="https://rev-notes.vercel.app/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="X" class="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    </div>
    `;
    let X = document.getElementById('X');
    let bg = document.getElementById('modal-bg');
    let modalAnim = document.querySelector('.modal-proyecto');

    modalAnim.classList.add('visible');
    X.addEventListener('click', ()=>{
        modal.innerHTML = '';
    })
    bg.addEventListener('click', (e)=>{
        if(e.target.id === "modal-bg"){
            modal.innerHTML = '';
        }
    })
})
proyecto2.addEventListener('click', () =>{
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-contenedor">
        <div class="modal-proyecto">
            <div class="modal-proyecto__img">
                <img src="./images/MovieApp.png" alt="imagen del proyecto">
            </div>

            <div class="texto-contenedor">
                <h2>Movie App</h2>

                <p>practice page, recreating a movie page to show the most popular, top rated and upcoming movies, consuming an API and Boostrap.</p>

                <div class="links">
                    <a href="https://github.com/RevienMaker/MovieApp.github.io" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <a href="https://revienmaker.github.io/MovieApp.github.io/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="X" class="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    </div>
    `;
    let X = document.getElementById('X');
    let bg = document.getElementById('modal-bg');
    let modalAnim = document.querySelector('.modal-proyecto');

    modalAnim.classList.add('visible');
    X.addEventListener('click', ()=>{
        modal.innerHTML = '';
    })
    bg.addEventListener('click', (e)=>{
        if(e.target.id === "modal-bg"){
            modal.innerHTML = '';
        }
    })
})
proyecto3.addEventListener('click', () =>{
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-contenedor">
        <div class="modal-proyecto">
            <div class="modal-proyecto__img">
                <img src="./images/BienesRaices.png" alt="imagen del proyecto">
            </div>

            <div class="texto-contenedor">
                <h2 translate="yes">Real Estate</h2>

                <p>practice page, recreating a Real Estate page with HTML, CSS and JavaScript.</p>

                <div class="links">
                    <a href="https://github.com/RevienMaker/Pagina-BienesRaices.github.io" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <a href="https://revienmaker.github.io/Pagina-BienesRaices.github.io/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="X" class="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    </div>
    `;
    let X = document.getElementById('X');
    let bg = document.getElementById('modal-bg');
    let modalAnim = document.querySelector('.modal-proyecto');

    modalAnim.classList.add('visible');
    X.addEventListener('click', ()=>{
        modal.innerHTML = '';
    })
    bg.addEventListener('click', (e)=>{
        if(e.target.id === "modal-bg"){
            modal.innerHTML = '';
        }
    })
})
proyecto4.addEventListener('click', () =>{
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-contenedor">
        <div class="modal-proyecto">
            <div class="modal-proyecto__img">
                <img src="./images/SimplePhisycs2.png" alt="imagen del proyecto">
            </div>

            <div class="texto-contenedor">
                <h2>Simple Phisycs</h2>

                <p>Physics website with different classes to learn easily. made using HTML, CSS and Bootstrap.</p>

                <div class="links">
                    <a href="https://github.com/RevienMaker/SimplePhisycs.github.io" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <a href="https://simple-phisycs.vercel.app/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="X" class="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    </div>
    `;
    let X = document.getElementById('X');
    let bg = document.getElementById('modal-bg');
    let modalAnim = document.querySelector('.modal-proyecto');

    modalAnim.classList.add('visible');
    X.addEventListener('click', ()=>{
        modal.innerHTML = '';
    })
    bg.addEventListener('click', (e)=>{
        if(e.target.id === "modal-bg"){
            modal.innerHTML = '';
        }
    })
})
proyecto5.addEventListener('click', () =>{
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-contenedor">
        <div class="modal-proyecto">
            <div class="modal-proyecto-tlf__img">
                <img src="./images/EnglishUp2.png" alt="imagen del proyecto">
            </div>

            <div class="texto-contenedor">
                <h2 translate="no">EnglishUp</h2>

                <p>English website (only made for mobile phones) with different classes to learn the language easily. made using HTML and CSS and Bootstrap</p>

                <div class="links">
                    <a href="https://github.com/RevienMaker/EnglishUp.github.io" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <a href="https://english-up.vercel.app/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="X" class="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    </div>
    `;
    let X = document.getElementById('X');
    let bg = document.getElementById('modal-bg');
    let modalAnim = document.querySelector('.modal-proyecto');

    modalAnim.classList.add('visible');
    X.addEventListener('click', ()=>{
        modal.innerHTML = '';
    })
    bg.addEventListener('click', (e)=>{
        if(e.target.id === "modal-bg"){
            modal.innerHTML = '';
        }
    })
})
proyecto6.addEventListener('click', () =>{
    modal.innerHTML += `
    <div id="modal-bg" class="modal-proyecto-contenedor">
        <div class="modal-proyecto">
            <div class="modal-proyecto__img">
                <img src="./images/HenrryVideogame.png" alt="imagen del proyecto">
            </div>

            <div class="texto-contenedor">
                <h2 translate="yes">Henrry (videogame)</h2>

                <p>My own 2D platform game, programmed with C# in Unity 2D.</p>

                <div class="links">
                    <a href="https://www.mediafire.com/file/tgu67ovzi3kzqzp/Henrry+Demo-Beta1.2.rar/file" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div id="X" class="X">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
    </div>
    `;
    let X = document.getElementById('X');
    let bg = document.getElementById('modal-bg');
    let modalAnim = document.querySelector('.modal-proyecto');

    modalAnim.classList.add('visible');
    X.addEventListener('click', ()=>{
        modal.innerHTML = '';
    });
    bg.addEventListener('click', (e)=>{
        if(e.target.id === "modal-bg"){
            modal.innerHTML = '';
        }
    });
})
