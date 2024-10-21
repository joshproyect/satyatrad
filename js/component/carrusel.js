/* Desplazamiento horizontal del contenedor de logos: */
export function setUpArrowEvents() {       // Función para configurar los eventos de las flechas

    const logosContainer = document.getElementById('logosContainer');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    if (leftArrow && rightArrow && logosContainer) {//if para prevenir errores si no existen los elementos en el dom
        
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
    }
}

export function carruselAutoInicio() {
    const logosContainer = document.getElementById('logosContainer');
    let intervalo = null;
    let velocidadPaso = 5;
    intervalo = setInterval(function () {
        logosContainer.scrollLeft += velocidadPaso;
        console.log(logosContainer.scrollLeft);
        if (logosContainer.scrollLeft == (logosContainer.scrollWidth - logosContainer.clientWidth)) {
            velocidadPaso = velocidadPaso * -1;
        } else if (logosContainer.scrollLeft == 0) {
            velocidadPaso = velocidadPaso * -1;
        }
    }, 10);
    logosContainer.addEventListener('mouseover', function() {
        clearInterval(intervalo);
    });
    logosContainer.addEventListener('mouseout', function() {
        intervalo = setInterval(function () {
            logosContainer.scrollLeft += velocidadPaso;
            console.log(logosContainer.scrollLeft);
            if (logosContainer.scrollLeft == (logosContainer.scrollWidth - logosContainer.clientWidth)) {
                velocidadPaso = velocidadPaso * -1;
            } else if (logosContainer.scrollLeft == 0) {
                velocidadPaso = velocidadPaso * -1;
            }
        }, 10);
    });
};