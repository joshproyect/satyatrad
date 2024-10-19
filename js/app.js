import { cargarTraducciones } from "./component/traducciones.js";
import { cargarTitulo768Content } from "./component/titulo768.js";
import { cargarMenuContent } from "./component/menu.js";
import { cargarEventClickLinks } from "./component/menu.js"
import { cargarTituloContent } from "./component/titulo.js";
import { cargarAccueilContent } from "./component/accueil.js";
import { cargarPortfolioContent } from "./component/portfolio.js";
import { cargarEventClickButtonsPortfolio } from "./component/portfolio.js"
import { cargarQuisuisjeContent } from "./component/quisuisje.js";
import { cargarContactoContent } from "./component/contacto.js";

export let traducc;

document.addEventListener('DOMContentLoaded', function() {
    
    // Función para alternar la clase 'show' en el menú hamburguesa
    document.querySelector('.hamburguer').addEventListener('click', function() {
        document.querySelector('#menu-list').classList.toggle('show');
    });
    
    // Se añade evento sobre el cambio de idioma
    document.getElementById('language').addEventListener('change', function() {    
        cargarTraducciones(document.getElementById('language').value)
            .then(traducciones => {
                traducc = traducciones;
                // Titulo oculto en pantallas superiores a 768px
                document.getElementById('titulo768').innerHTML = cargarTitulo768Content(traducc);
                // Menu
                document.getElementById('menu').innerHTML = cargarMenuContent(traducc);
                cargarEventClickLinks();
                // Titulo
                document.getElementById('titulo').innerHTML = cargarTituloContent(traducc);
                // Seccion-Pagina
                let sectionId = window.location.hash.substring(1);
                switch (sectionId) {
                    case "accueil":
                        document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                        setUpArrowEvents();  // Llama a la función para asignar eventos de las flechas
                        break;
                    case "portfolio":
                        document.getElementById('main-content').innerHTML = cargarPortfolioContent(traducc);
                        cargarEventClickButtonsPortfolio(traducc);
                        break;
                    case "quisuisje":
                        document.getElementById('main-content').innerHTML = cargarQuisuisjeContent(traducc);
                        break;
                    case "contacto":
                        document.getElementById('main-content').innerHTML = cargarContactoContent(traducc);
                        break;
                    default:
                        document.getElementById('main-content').innerHTML = 'Error al cargar sección';
                }
                // Cierra el menú al cambiar de página
                document.querySelector('#menu-list').classList.remove('show');
            })
            .catch(error => {
                console.error('Error en la carga de traducciones:', error);
            });
    });

    // Manejar el evento de cambio de hash en la URL
    window.addEventListener('hashchange', function() {
        // Seccion-Pagina
        let sectionId = window.location.hash.substring(1);
        if (typeof traducc === 'undefined') {
            cargarTraducciones(document.getElementById('language').value)
                .then(traducciones => {
                    traducc = traducciones;
                    switch (sectionId) {
                        case "accueil":
                            document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                            setUpArrowEvents();  // Llama a la función para asignar eventos de las flechas
                            break;
                        case "portfolio":
                            document.getElementById('main-content').innerHTML = cargarPortfolioContent(traducc);
                            cargarEventClickButtonsPortfolio(traducc);
                            break;
                        case "quisuisje":
                            document.getElementById('main-content').innerHTML = cargarQuisuisjeContent(traducc);
                            break;
                        case "contacto":
                            document.getElementById('main-content').innerHTML = cargarContactoContent(traducc);
                            break;
                        default:
                            document.getElementById('main-content').innerHTML = 'Error al cargar sección';
                    }
                    // Cierra el menú al cambiar de página
                    document.querySelector('#menu-list').classList.remove('show');
                })
                .catch(error => {
                    console.error('Error en la carga de traducciones:', error);
                });
        } else {
            switch (sectionId) {
                case "accueil":
                    document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                    setUpArrowEvents();  // Llama a la función para asignar eventos de las flechas
                    break;
                case "portfolio":
                    document.getElementById('main-content').innerHTML = cargarPortfolioContent(traducc);
                    cargarEventClickButtonsPortfolio(traducc);
                    break;
                case "quisuisje":
                    document.getElementById('main-content').innerHTML = cargarQuisuisjeContent(traducc);
                    break;
                case "contacto":
                    document.getElementById('main-content').innerHTML = cargarContactoContent(traducc);
                    break;
                default:
                    document.getElementById('main-content').innerHTML = 'Error al cargar sección';
            }
            // Cierra el menú al cambiar de página
            document.querySelector('#menu-list').classList.remove('show');
        }
    });

    // Sección de inicio   
    window.location.hash = "accueil";
    cargarTraducciones(document.getElementById('language').value)
        .then(traducciones => {
            traducc = traducciones;
            // Titulo oculto en pantallas superiores a 768px
            document.getElementById('titulo768').innerHTML = cargarTitulo768Content(traducc);
            // Menu
            document.getElementById('menu').innerHTML = cargarMenuContent(traducc);
            cargarEventClickLinks();
            // Titulo
            document.getElementById('titulo').innerHTML = cargarTituloContent(traducc);
            // Seccion-Pagina
            let sectionId = window.location.hash.substring(1);
            switch (sectionId) {
                case "accueil":
                    document.getElementById('main-content').innerHTML = cargarAccueilContent(traducc);
                    break;
                case "portfolio":
                    document.getElementById('main-content').innerHTML = cargarPortfolioContent(traducc);
                    cargarEventClickButtonsPortfolio(traducc);
                    break;
                case "quisuisje":
                    document.getElementById('main-content').innerHTML = cargarQuisuisjeContent(traducc);
                    break;
                case "contacto":
                    document.getElementById('main-content').innerHTML = cargarContactoContent(traducc);
                    break;
                default:
                    document.getElementById('main-content').innerHTML = 'Error al cargar sección';
            }
            // Cierra el menú al cambiar de página
            document.querySelector('#menu-list').classList.remove('show');
        })
        .catch(error => {
            console.error('Error en la carga de traducciones:', error);
        });
});


/* Desplazamiento horizontal del contenedor de logos: */
 // document.addEventListener('DOMContentLoaded', function() {
function setUpArrowEvents() {       // Función para configurar los eventos de las flechas

    const logosContainer = document.getElementById('logosContainer');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

   if (leftArrow && rightArrow && logosContainer) {//if para prevenir errores si no existen los elementos en el dom
    // Función para desplazar a la izquierda
    leftArrow.addEventListener('click', function() {
        logosContainer.scrollBy({
            left: -300, // Ajusta este valor según el ancho de los logos
            behavior: 'smooth'
        });
    });

    // Función para desplazar a la derecha
    rightArrow.addEventListener('click', function() {
        logosContainer.scrollBy({
            left: 300, // Ajusta este valor según el ancho de los logos
            behavior: 'smooth'
        });
    });
   }
}