document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MODE SOMBRE / CLAIR (DOM) ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                darkModeToggle.textContent = '☀️ Clair';
                darkModeToggle.classList.replace('btn-outline-light', 'btn-outline-warning');
            } else {
                darkModeToggle.textContent = '🌙 Mode';
                darkModeToggle.classList.replace('btn-outline-warning', 'btn-outline-light');
            }
        });
    }

    // --- 2. FILTRE DES PROJETS (DOM) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active', 'btn-dark'));
            filterButtons.forEach(btn => btn.classList.add('btn-outline-dark'));
            e.target.classList.add('active', 'btn-dark');
            e.target.classList.remove('btn-outline-dark');

            const filter = e.target.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- 3. BOUTON RETOUR EN HAUT (BOM) ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.remove('d-none');
            } else {
                scrollTopBtn.classList.add('d-none');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});