(function () {

function getTheme() {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function updateIcon(theme) {
    const icon = document.querySelector(".theme-switch i.fas");
    if (!icon) return; // если переключателя нет — просто выходим

    icon.classList.toggle("fa-moon", theme === "dark");
    icon.classList.toggle("fa-sun", theme !== "dark");
}

let theme = getTheme();

document.documentElement.setAttribute("data-bs-theme", theme);

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    theme = getTheme();
    document.documentElement.setAttribute("data-bs-theme", theme);
    updateIcon(theme);
});

window.addEventListener("load", () => {

    updateIcon(theme);

    const switches = document.querySelectorAll(".theme-switch");

    if (!switches.length) return; // если переключателя нет — ничего не делаем

    switches.forEach(btn => {
        btn.addEventListener("click", (e) => {

            theme = theme === "light" ? "dark" : "light";

            document.documentElement.setAttribute("data-bs-theme", theme);
            localStorage.setItem("theme", theme);

            updateIcon(theme);

            e.preventDefault();
        });
    });

});

})();