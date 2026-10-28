const button_burger = document.getElementById("hamburger");
const burger_lines = document.querySelectorAll(".hamburger-menu-line")

button_burger.addEventListener("click", () => {

    const isExpanded = button_burger.getAttribute('aria-expanded') === 'true';

    button_burger.setAttribute('aria-expanded', !isExpanded);

    const burgerClassAdd = isExpanded ? 'inActive' : 'Active';
    const burgerClassRemove = isExpanded ? 'Active' : 'inActive';

    burger_lines.forEach(line => {
        line.classList.remove(burgerClassRemove);
        line.classList.add(burgerClassAdd);
    })
});