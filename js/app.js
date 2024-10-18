import { cargarTraducciones } from "./component/traducciones.js";
import { cargarTitulo768Content } from "./component/titulo768.js";
import { cargarMenuContent } from "./component/menu.js";
import { cargarTituloContent } from "./component/titulo.js";
import { cargarAccueilContent } from "./component/accueil.js";
import { cargarPortfolioContent } from "./component/portfolio.js";
import { cargarEventClickButtonsPortfolio } from "./component/portfolio.js"
import { cargarQuisuisjeContent } from "./component/quisuisje.js";
import { cargarContactoContent } from "./component/contacto.js";

export let traducc;

document.addEventListener('DOMContentLoaded', function() {
  
    // Se añade evento sobre el cambio de idioma
    document.getElementById('language').addEventListener('change', function() {    
        cargarTraducciones(document.getElementById('language').value)
            .then(traducciones => {
                traducc = traducciones;
                // Titulo oculto en pantallas superiores a 768px
                document.getElementById('titulo768').innerHTML = cargarTitulo768Content(traducc);
                // Menu
                document.getElementById('menu').innerHTML = cargarMenuContent(traducc);
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
                closeNav(); // Cierra el menú al cambiar de página
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
                    closeNav(); // Cierra el menú al cambiar de página
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
            closeNav(); // Cierra el menú al cambiar de página
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
            closeNav(); // Cierra el menú al cambiar de página
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
   //}); //estos venian del DomContentLoaded

/* Apertura y cierre del menú hamburguesa */
document.addEventListener('DOMContentLoaded', function() {
    const hamburguesa = document.querySelector('.hamburguer');
    const enlaces = document.querySelector('#menu-list');

    // Función para alternar la clase 'show' en el menú
    function toggleMenu() {
        enlaces.classList.toggle('show');
    }

    // Función para cerrar el menú
    window.closeNav = function() {
        enlaces.classList.remove('show');
    }

    // Event listener para el menú hamburguesa
    hamburguesa.addEventListener('click', toggleMenu);

});
