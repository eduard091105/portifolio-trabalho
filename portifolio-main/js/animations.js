// Animação de fade-in inicial
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main-content');
    
    // Adiciona fade-in inicial
    mainContent.style.opacity = '0';
    
    setTimeout(() => {
        mainContent.style.transition = 'opacity 1s ease-in-out';
        mainContent.style.opacity = '1';
    }, 200);
});

// Animação dos cards de tecnologia
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
}); 