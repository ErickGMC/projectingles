// Elementos existentes en la página
const japanImage = document.getElementById('japan-image');
const mexicoImage = document.getElementById('mexico-image');
const samurai = document.getElementById('samurai');
const mariachi = document.getElementById('mariachi');
const japanText = document.getElementById('japan-text');
const mexicoText = document.getElementById('mexico-text');

// Inicializar: Mostrar Japón y el Samurai con su texto
japanImage.classList.add('visible');
mexicoImage.classList.add('hidden');
samurai.classList.add('visible');
japanText.classList.add('visible');
mariachi.classList.add('hidden');
mexicoText.classList.add('hidden');

// Manejo de clic en la imagen de Japón
japanImage.addEventListener('click', () => {
    japanImage.classList.remove('visible');
    japanImage.classList.add('hidden');
    mexicoImage.classList.remove('hidden');
    mexicoImage.classList.add('visible');

    // Mostrar el Mariachi y su texto, ocultar el Samurai y su texto
    mariachi.classList.add('visible');
    mexicoText.classList.add('visible');
    samurai.classList.remove('visible');
    japanText.classList.remove('visible');
});

// Manejo de clic en la imagen de México
mexicoImage.addEventListener('click', () => {
    mexicoImage.classList.remove('visible');
    mexicoImage.classList.add('hidden');
    japanImage.classList.remove('hidden');
    japanImage.classList.add('visible');

    // Mostrar el Samurai y su texto, ocultar el Mariachi y su texto
    samurai.classList.add('visible');
    japanText.classList.add('visible');
    mariachi.classList.remove('visible');
    mexicoText.classList.remove('visible');
});

// Escuchar los eventos de teclado para navegación
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        // Navega al archivo final.html cuando se presiona la flecha derecha
        window.location.href = "final.html";
    } else if (event.key === "ArrowLeft") {
        // Navega al archivo index.html cuando se presiona la flecha izquierda
        window.location.href = "index.html";
    }
});
