const accueilContent = `
        <article id="inicio" class="active">
            <div class="parafo-articulo">
                <h2>
                    TRADUCTRICE SPÉCIALISÉE BD
                </h2>
                <h1>
                    SATYA DANIEL
                </h1>
                <p>
                    Vous éditez des bandes dessinées, des romans graphiques, des
                    mangas ou des webtoons ? 
                </p>
                <p>
                    Vous recherchez une traductrice littéraire de l’espagnol, du 
                    catalan ou de l’anglais vers le français maîtrisant les codes 
                    de la BD ? Et en particulier les codes culturels de l’Espagne, 
                    de la Catalogne, du Canada, du Québec et de l’Écosse ?
                </p>
                <p>                       
                    N’hésitez pas à me contacter pour échanger et discuter ensemble 
                    de vos projets !
                </p>
            </div>
            <div class="boton-articulo">
                <button>
                    <a href="./src/contacto.html"> ME CONTACTER</a>
                </button>
            </div>
        </article>

        <div class="empresas-confian-container">
            <div class="empresas-confian">
                <h2>Ils m’ont fait confiance</h2>
                <div class="scroll-container">
                    <div class="scroll-arrow left-arrow" id="leftArrow">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                        <div class="logos-empresas" id="logosContainer">
                            <a href="" target="_blank">
                                <img src="./assets/img/logos/Dynamite-logo1648922779596.png" alt="Logo Empresa 1">
                            </a>
                            <a href="" target="_blank">
                                <img src="./assets/img/logos/glénat.png" alt="Logo Empresa 2">
                            </a>
                            <a href="" target="_blank">
                                <img src="./assets/img/logos/logo humanos.jpg" alt="Logo Empresa 3">
                            </a>
                            <a href="" target="_blank">
                                <img src="./assets/img/logos/logo Jungle.jpg" alt="Logo Empresa 4">
                            </a>
                            <a href="" target="_blank">
                                <img src="./assets/img/logos/logo metal hurlant.jpg" alt="Logo Empresa 5">
                            </a>
                            <a href="" target="_blank">
                                <img src="./assets/img/logos/logo paquet.jpg" alt="Logo Empresa 6">
                            </a>
                            <a href="" target="_blank">
                                <img src="./assets/img/logos/logo_dupuis_rouge3.png" alt="Logo Empresa 7">
                            </a>
                            <a href="" target="_blank">
                                <img src="./assets/img/logos/NHN_Corp_Logo.svg.png" alt="Logo Empresa 8">
                            </a>
                        </div>
                    <div class="scroll-arrow right-arrow" id="rightArrow">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
`;

export function cargarAccueilContent () {
    return accueilContent;
}
