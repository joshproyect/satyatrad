export function cargarAccueilContent (traducc) {
    const accueilContent = `
        <article id="inicio" class="active">
            <div class="parafo-articulo">
                <h2>${traducc.accueil.titulo}</h2>
                <h1>SATYA DANIEL</h1>
                <p>${traducc.accueil.p1}</p>
                <p>${traducc.accueil.p2}</p>
                <p>${traducc.accueil.p3}</p>
            </div>
            <div class="boton-articulo">
                <button>
                    <a href="#contacto">${traducc.accueil.boton}</a>
                </button>
            </div>
        </article>

        <div class="empresas-confian-container">
            <div class="empresas-confian">
                <h2>${traducc.accueil.tituloEnlace}</h2>
                <div class="scroll-container">
                    <div class="scroll-arrow left-arrow" id="leftArrow">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                        <div class="logos-empresas" id="logosContainer">
                            <a href="https://www.dupuis.com/" target="_blank">
                                <img src="./assets/img/logos/Dupuis fondo blanco.png" alt="Logo 1">
                            </a>
                            <a href="https://www.lamusardine.com/content/15-editions-la-musardine" target="_blank">
                                <img src="./assets/img/logos/Dynamite-logo1648922779596.png" alt="Logo 2">
                            </a>
                            <a href="https://www.glenat.com/" target="_blank">
                                <img src="./assets/img/logos/Glénat fondo blanco.jpg" alt="Logo 3">
                            </a>
                            <a href="https://www.humano.com/" target="_blank">
                                <img src="./assets/img/logos/Humanoïdes Associés cuadrado.png" alt="Logo 4">
                            </a>
                            <a href="https://editions-jungle.com/" target="_blank">
                                <img src="./assets/img/logos/Jungle cuadrado.png" alt="Logo 5">
                            </a>
                            <a href="https://www.humano.com/metal-hurlant" target="_blank">
                                <img src="./assets/img/logos/Metal Hurlant cuadrado.png" alt="Logo 6">
                            </a>
                            <a href="https://editionspaquet.com/" target="_blank">
                                <img src="./assets/img/logos/logo paquet.jpg" alt="Logo 7">
                            </a>
                            <a href="https://www.pocketcomics.com/?languageCode=fr" target="_blank">
                                <img src="./assets/img/logos/NHN fondo blanco.png" alt="Logo 8">
                            </a>
                        </div>
                    <div class="scroll-arrow right-arrow" id="rightArrow">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
`;
    return accueilContent;
}
