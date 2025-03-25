const llistaProjectes = document.getElementById('llista-projectes');

// Dades dels projectes (això es pot carregar des d'un formulari o un fitxer JSON)
const projectes = [
    {
        titol: 'Projecte 1',
        imatges: ['imatge1.jpg', 'imatge2.jpg'],
        descripcio: 'Descripció del projecte 1.'
    },
    {
        titol: 'Projecte 2',
        imatges: ['imatge3.jpg', 'imatge4.jpg'],
        descripcio: 'Descripció del projecte 2.'
    },
    // Afegir més projectes aquí
];

// Funció per generar el HTML dels projectes
function generarProjecteHTML(projecte) {
    return `
        <div class="projecte">
            <h3>${projecte.titol}</h3>
            <div class="projecte-imatges">
                ${projecte.imatges.map(imatge => `<img src="${imatge}" alt="${projecte.titol}">`).join('')}
                <p>${projecte.descripcio}</p>
            </div>
        </div>
    `;
}

// Afegir els projectes a la llista
projectes.forEach(projecte => {
    llistaProjectes.innerHTML += generarProjecteHTML(projecte);
});

// Funció per desplegar les imatges i la descripció d'un projecte
const projectesHTML = document.querySelectorAll('.projecte');
projectesHTML.forEach(projecte =>{
  projecte.addEventListener('click', ()=>{
    projecte.querySelector('.projecte-imatges').style.display = 'block';
  })
})
