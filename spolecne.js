const HamburgerMenu = document.querySelector("#menu-tlacitko")

HamburgerMenu.addEventListener("click", ()=>{
    const menu_polozky = document.querySelector("#menu-polozky")
    menu_polozky.classList.toggle("show")

    const hamburgerIcon = document.querySelector(".fa-bars")
    hamburgerIcon.classList.toggle("fa-xmark")
})