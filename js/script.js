// Přepínání tmavého / světlého režimu
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Filtrování žánrů na stránce Žánry
function filterGenres() {
    const input = document.getElementById("search");
    if (!input) return;

    const q = input.value.trim().toLowerCase();
    const items = document.querySelectorAll(".genre");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? "" : "none";
    });
}
