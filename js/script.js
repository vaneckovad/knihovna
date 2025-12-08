// scrollTop - tlačítko vrátit se nahoru
function scrollTop() {
    // Ne všechny prohlížeče podporují smooth v inboxu bez JS - ale většina ano.
    try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
        window.scrollTo(0, 0);
    }
}

// přepínač tématu (tmavý/světlý)
function toggleTheme() {
    document.body.classList.toggle('dark');
}

// filterGenres - filtruje elementy s třídou .genre podle input#search
function filterGenres() {
    const input = document.getElementById('search');
    if (!input) return;
    const q = input.value.trim().toLowerCase();
    const items = document.querySelectorAll('.genre');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? '' : 'none';
    });
}

// handleContact - jednoduché "odeslání" formuláře na statické stránce
function handleContact(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const result = document.getElementById('formResult');

    if (!name || !email || !message) {
        result.textContent = 'Prosím vyplň všechna pole.';
        result.style.color = 'crimson';
        return false;
    }

    // zde by normálně proběhlo odeslání na server
    result.textContent = 'Děkujeme! Zpráva byla připravena k odeslání (demo).';
    result.style.color = 'green';

    // pro demo vyčistíme formulář
    document.getElementById('contactForm').reset();
    return false;
}
