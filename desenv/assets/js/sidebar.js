document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("mainContent");

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");
            if (content) {
                content.classList.toggle("collapsed");
            }
        });
    }

    const themeSwitcher = document.getElementById("theme-switcher");
    const body = document.body;
    const navbar = document.querySelector(".navbar-custom");

    const applyTheme = (theme) => {
        body.classList.remove("light-theme", "dark-theme");
        body.classList.add(theme);
        if (sidebar) {
            sidebar.classList.remove("light-theme", "dark-theme");
            sidebar.classList.add(theme);
        }
        if (navbar) {
            navbar.classList.remove("light-theme", "dark-theme");
            navbar.classList.add(theme);
        }
        localStorage.setItem("theme", theme);
        updateIcon(theme);
    };

    const updateIcon = (theme) => {
        if (themeSwitcher) {
            const icon = themeSwitcher.querySelector("i");
            if (theme === "light-theme") {
                icon.classList.remove("bi-moon");
                icon.classList.add("bi-sun");
            } else {
                icon.classList.remove("bi-sun");
                icon.classList.add("bi-moon");
            }
        }
    };

    if (themeSwitcher) {
        themeSwitcher.addEventListener("click", () => {
            const currentTheme = localStorage.getItem("theme") || "dark-theme";
            const newTheme = currentTheme === "dark-theme" ? "light-theme" : "dark-theme";
            applyTheme(newTheme);
        });
    }

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem("theme") || "dark-theme";
    applyTheme(savedTheme);
});