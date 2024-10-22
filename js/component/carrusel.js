/* Desplazamiento horizontal del contenedor de logos: */
export function setUpArrowEvents() {       // Función para configurar los eventos de las flechas

    const logosContainer = document.getElementById('logosContainer');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    let intervaloId = null;
    let velocidadPaso = 30;

    if (leftArrow && rightArrow && logosContainer) {//if para prevenir errores si no existen los elementos en el dom
        
        
        leftArrow.addEventListener('mouseover', function() {
            intervaloId = setInterval(function() {
                logosContainer.scrollLeft -= velocidadPaso;
            }, 100);
        });
        leftArrow.addEventListener('mouseout', function() {
            clearInterval(intervaloId);
        });
        rightArrow.addEventListener('mouseover', function() {
            intervaloId = setInterval(function() {
                logosContainer.scrollLeft += velocidadPaso;
            }, 100);
        });
        rightArrow.addEventListener('mouseout', function() {
            clearInterval(intervaloId);
        });
        
    }
    /* 
    
            // Función para desplazar a la izquierda
            leftArrow.addEventListener('click', function() {
                logosContainer.scrollBy({
                    left: -500, // Ajusta este valor según el ancho de los logos // Valor original -300
                    behavior: 'smooth'
                });
            });
    
            // Función para desplazar a la derecha
            rightArrow.addEventListener('click', function() {
                logosContainer.scrollBy({
                    left: 500, // Ajusta este valor según el ancho de los logos // Valor original 300
                    behavior: 'smooth'
                });
            });
    
             */
};
