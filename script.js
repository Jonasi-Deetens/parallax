const init = () => {
    window.onscroll = updateParallax;
};

const updateParallax = () => {
    const scrollPos = window.scrollY;

    const gojoPicture = document.querySelector(".gojo-picture");
    const orbPicture = document.querySelector(".orb-picture");

    if (scrollPos < 200) {
        gojoPicture.style.transform = "translate(-50%," + (scrollPos + (scrollPos/10 * 2)) + "px)";
        orbPicture.style.transform = "translateY(" + (scrollPos + (scrollPos/10 * 8)) + "px)";
        orbPicture.style.transform += "scale(" + (scrollPos/10 + 1) + ")";
    }
};
window.onload = init;
