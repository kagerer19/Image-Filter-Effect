function darkModeBody() {
    let element = document.body;
    element.classList.toggle("darkModeBody");
}

function themeText() {
    document.getElementById("dark-mode-theme-text")
        .textContent = "Light Mode";
}