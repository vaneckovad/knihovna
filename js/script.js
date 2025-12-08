// Přepínání tmavého / světlého režimu
function toggleTheme() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    const btn = document.getElementById("themeToggle");

    // Při tmavém režimu zobrazíme sluníčko
    if (isDark) {
        btn.querySelector(".moon").style.display = "none";
        btn.querySelector(".sun").style.display = "inline";
    } else {
        // Při světlém režimu zobrazíme měsíček
        btn.querySelector(".moon").style.display = "inline";
        btn.querySelector(".sun").style.display = "none";
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
// Jednoduché potvrzení odeslání tipu
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("tipForm");
    const message = document.getElementById("tipMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // zabrání refreshi

        message.textContent = "Děkujeme! Tvůj tip byl uložen.";
        message.style.display = "block";

        form.reset();
    });
});




