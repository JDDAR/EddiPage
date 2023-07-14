
const toogleNav = document.getElementById("nav_toogle");
const itemsNav = document.getElementById("items_nav");

toogleNav.addEventListener("click", () => {
    toogleNav.classList.toggle("open");
    itemsNav.classList.toggle("show");
});

itemsNav.addEventListener("click", e => {
    if(e.target.id === "items_nav"){
        itemsNav.classList.remove("show");
        toogleNav.classList.remove("open");
    }
})

