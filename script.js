//nav
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let aktualisSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            aktualisSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + aktualisSection) {
            link.classList.add("active");
        }
    });
});

//vissza
const vissza = document.getElementById("vissza");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        vissza.classList.add("show");
    } else {
        vissza.classList.remove("show");
    }
});

vissza.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//hambureg
const menuGomb = document.getElementById("menuGomb");
const menu = document.getElementById("menu");

menuGomb.addEventListener("click", () => {
    menu.classList.toggle("open");
});

menu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("open");
    });

});