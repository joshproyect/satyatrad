import { cargarTraducciones } from "./component/traducciones.js";
import { cargarTituloContent } from "./component/header-titulo.js";
import { cargarAccueilContent } from "./component/accueil.js";
import { cargarPortfolioContent } from "./component/portfolio.js";
import { cargarEventClickButtonsPortfolio } from "./component/portfolio.js"
import { cargarQuisuisjeContent } from "./component/quisuisje.js";
import { cargarContactoContent } from "./component/contacto.js";
import { cargarMenuContent } from "./component/header-menu.js";

export let traducc;

document.addEventListener('DOMContentLoaded', function() {
  
    // Ini Carga de eventos
    // =============================================================

    // Manejar el evento de cambio de idioma
    document.getElementById('language').addEventListener('change', function() {
        cargarTraducciones(this.value)
            .then(traducc => {
                // Mostrar Header Menu + Titulo
                menuContent.innerHTML = cargarMenuContent(traducc);
                tituloContent.innerHTML = cargarTituloContent(traducc);
                // Mostrar la sección correspondiente al cargar la página
                handleRouteChange(traducc);
            })
            .catch(error => {
                console.error('Error en la carga de traducciones:', error);
            });
    });

    // Manejar el evento de cambio de hash en la URL
    window.addEventListener('hashchange', handleRouteChange);

    // Manejar el evento de clic en los enlaces del menú
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            window.location.hash = sectionId;
            handleRouteChange(traducc);
        });
    });

    // Fin Carga de eventos
    // =============================================================

    
    // Ini funciones
    // =============================================================

    // Función para manejar el cambio de ruta
    function handleRouteChange(traducc) {
        const hash = window.location.hash.substring(1);
        showSection(hash, traducc);
    }

    // Función para mostrar la sección correspondiente
    function showSection(sectionId, traducc) {
        switch (sectionId) {
            case "accueil":
                mainContent.innerHTML = cargarAccueilContent(traducc);
                break;
            case "portfolio":
                mainContent.innerHTML = cargarPortfolioContent(traducc);
                cargarEventClickButtonsPortfolio(traducc);
                break;
            case "quisuisje":
                mainContent.innerHTML = cargarQuisuisjeContent(traducc);
                break;
            case "contacto":
                mainContent.innerHTML = cargarContactoContent(traducc);
                break;
            default:
                mainContent.innerHTML = 'Error al cargar sección';
        }
    }

    // Fin funciones
    // =============================================================

    // Ini nodos
    // =============================================================

    const tituloContent = document.getElementById('header-titulo');
    const menuContent = document.getElementById('header-menu');
    const mainContent = document.getElementById('main-content');

    // Fin nodos
    // =============================================================         
    
    // Sección de inicio   
    window.location.hash = "accueil";

    //const traducc = cargarTraducciones(document.getElementById('language').value);
    cargarTraducciones(document.getElementById('language').value)
        .then(traduccion => {
            traducc = traduccion;
            // Mostrar Header Menu + Titulo
            menuContent.innerHTML = cargarMenuContent(traducc);
            tituloContent.innerHTML = cargarTituloContent(traducc);
            // Mostrar la sección correspondiente al cargar la página
            handleRouteChange(traducc);
        })
        .catch(error => {
            console.error('Error en la carga de traducciones:', error);
    });
  });