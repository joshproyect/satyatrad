import { traducc } from "../app.js";

export async function cargarTraducciones(idioma) {
    try {
        // Especifica la ruta del archivo JSON
        const filePath = `./locales/${idioma}.json`;

        // Realiza la solicitud fetch para obtener el contenido del archivo
        const response = await fetch(filePath);

        // Verifica si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo: ${response.statusText}`);
        }

        // Convierte la respuesta a formato JSON
        const data = await response.json();

        // Asigna el resultado a la variable "traducc"
        const traducciones = data;

        // Devuelve la variable "traducc"
        return traducciones;  
    } catch (error) {
        console.error('Error al cargar las traducciones:', error);
    }
}
