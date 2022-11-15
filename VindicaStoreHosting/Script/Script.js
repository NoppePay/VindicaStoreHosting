let Menu = document.getElementById("menu");
let Button = document.getElementById("toggle");


Button.addEventListener("click", function() {
    Menu.classList.toggle("active");
});