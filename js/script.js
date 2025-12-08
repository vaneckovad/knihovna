// Přepínání tmavého / světlého režimu
function toggleTheme() {
    document.body.classList.toggle("dark");

    const btn = document.getElementById("themeToggle");

    // Pokud je zapnutý dark mode → ukaž sluníčko
    if (document.body.classList.contains("dark")) {
        btn.textContent = "☀️";
    } 
    // Jinak ukaž měsíček
    else {
        btn.textContent = "🌙";
    }
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

