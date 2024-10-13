const accueilContent = `
        <article id="inicio" class="active">
            <div class="content">
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
            </div>
            <div class="image">
                <img src="./assets/img/Satya modifé coupé.jpg" alt="Logo">  
            </div>
        </article>

        <div class="empresas-confian-container">
            <div class="empresas-confian">
                <h2>Ils nous font déjà confiance</h2>
                <div class="logos-empresas">
                    <img src="./assets/img/logos/Dynamite-logo1648922779596.png" alt="Logo Empresa 1">
                    <img src="./assets/img/logos/glénat.png" alt="Logo Empresa 2">
                    <img src="./assets/img/logos/logo humanos.jpg" alt="Logo Empresa 3">
                    <img src="./assets/img/logos/logo Jungle.jpg" alt="Logo Empresa 4">
                    <img src="./assets/img/logos/logo metal hurlant.jpg" alt="Logo Empresa 5">
                    <img src="./assets/img/logos/logo paquet.jpg" alt="Logo Empresa 6">
                    <img src="./assets/img/logos/logo_dupuis_rouge3.png" alt="Logo Empresa 7">
                    <img src="./assets/img/logos/NHN_Corp_Logo.svg.png" alt="Logo Empresa 8">
                </div>
            </div>
        </div>
`;

export function cargarAccueilContent () {
    return accueilContent;
}