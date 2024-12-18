// Variabile globale
let isWhite = false;

// Referințe la elementele paginii
const body = document.body;
const introText = document.getElementById('introText');
const ctaText = document.getElementById('ctaText');
const toggleColorBtn = document.getElementById('toggleColorBtn');

// Funcția care aplică stilurile în funcție de tema selectată
function applyColorMode(isWhite) {
    body.style.color = isWhite ? 'white' : 'black';
    body.style.backgroundColor = isWhite ? 'black' : 'white';
    if (introText) {
        introText.style.backgroundColor = isWhite ? 'black' : 'rgba(255, 255, 255, 0.8)';
    }
    if (ctaText) {
        ctaText.style.backgroundColor = isWhite ? 'black' : 'rgba(255, 255, 255, 0.8)';
    }
}

// Citește starea temei din localStorage la încărcarea paginii
document.addEventListener('DOMContentLoaded', () => {
    const savedColorMode = localStorage.getItem('isWhite');
    if (savedColorMode !== null) {
        isWhite = savedColorMode === 'true';
        applyColorMode(isWhite); // Aplică stilurile salvate
    }

    // Configurează butonul de toggle, dacă există
    if (toggleColorBtn) {
        toggleColorBtn.addEventListener('click', () => {
            isWhite = !isWhite;
            localStorage.setItem('isWhite', isWhite); // Salvează starea
            applyColorMode(isWhite); // Aplică stilurile
        });
    }
});
