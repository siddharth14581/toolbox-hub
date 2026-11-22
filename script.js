
// TOOLBOX HUB - MAIN JAVASCRIPT

// DARK AND LIGHT MODE
const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("toolbox-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

function updateThemeIcon() {
    themeToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const currentTheme =
        document.body.classList.contains("dark") ? "dark" : "light";

    localStorage.setItem("toolbox-theme", currentTheme);
    updateThemeIcon();
});


// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


// TOOL SEARCH
const searchInput = document.getElementById("toolSearch");
const searchButton = document.getElementById("searchButton");
const toolCards = document.querySelectorAll(".tool-card");
const noResults = document.getElementById("noResults");

function searchTools() {
    const searchText = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;

    toolCards.forEach(card => {
        const toolName = card.dataset.name.toLowerCase();

        const matches = toolName.includes(searchText);

        card.style.display = matches ? "" : "none";

        if (matches) visibleCount++;
    });

    noResults.hidden = visibleCount !== 0;
}

searchButton.addEventListener("click", searchTools);

searchInput.addEventListener("input", searchTools);

searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchTools();
    }
});


// AUTOMATIC COPYRIGHT YEAR
document.getElementById("currentYear").textContent =
    new Date().getFullYear();
