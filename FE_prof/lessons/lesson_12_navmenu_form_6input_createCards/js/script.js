const menu_icon = document.querySelector(".menu_icon");
const nav_menu = document.querySelector(".nav_menu");

menu_icon.addEventListener("click", () => {
    if (nav_menu.classList.contains("active")) {
        nav_menu.classList.remove("active");
    } else {
        nav_menu.classList.add("active");
    }

    // nav_menu.classList.toggle("active")
});

