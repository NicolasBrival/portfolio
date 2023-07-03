//changement couleur
const bkgColorBtnColor = document.querySelector("#color-selector")
const containerElement = document.querySelector("#container")
function myColorTheme() {
    let color = bkgColorBtnColor.value;
    bkgColorBtnColor.style.backgroundColor = color;
    containerElement.style.background = "url('')";
    containerElement.style.backgroundColor = color;
}

bkgColorBtnColor.addEventListener("input", myColorTheme);
    
//soleil -lune : dark mode
const darkModeBtn = document.querySelector("#dark-mode-button")
function handelSunMoonClick(event) {
    const clickedSunMoon = event.currentTarget; //élément cliqué
    console.log("Vous avez cliqué sur le soleil");
    clickedSunMoon.style.animation= "sun-move 1000ms ease-in";
    setTimeout(() => {
        clickedSunMoon.style.background = "linear-gradient(to left, rgb(163, 163, 163),rgb(49, 49, 49))";
        containerElement.style.opacity = 0.6;
},  "1001")
    
}
darkModeBtn.addEventListener("click", handelSunMoonClick);

/*
const navbarMenuElements = document.querySelectorAll(".navbar-menu__element");


function handelPixelClick(event) {
    const clickedNavbarMenuElement = event.currentTarget; //élément cliqué
    console.log("Vous avez cliqué sur l'élément");
}


function action(event) {
    const clickedNavbarMenuElement = event.currentTarget; //élément cliqué
    console.log("Vous avez cliqué sur l'un des menu !");

    //changement du style
    clickedNavbarMenuElement.style.backgroundColor= "var(--principal-color-opacity)";
    clickedNavbarMenuElement.style.borderRadius= "10px";
    clickedNavbarMenuElement.style.boxShadow= "0 2px 2px rgba(0, 0, 0, 0.4)";
}

setTimeout(function() {
    //réinitialisation du style de l'élément
     {
        clickedNavbarMenuElement.style.backgroundColor= "var(--principal-color)";
        clickedNavbarMenuElement.style.borderRadius= "none";
        clickedNavbarMenuElement.style.boxShadow= "none";
      }, 5000);

}, false);

for (const navbarMenuElement of navbarMenuElements) {
    navbarMenuElement.addEventListener("mouseover", action);
}
*/


