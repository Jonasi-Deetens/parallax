const init = () => {
    window.onscroll = updateParallax;
};

const updateParallax = () => {
    const scrollPos = window.scrollY;

    const gojoPicture = document.querySelector(".gojo-picture");
    const orbPicture = document.querySelector(".orb-picture");

    if (scrollPos < 200) {
        gojoPicture.style.transform = "translate(-50%," + scrollPos + "px)";
        orbPicture.style.transform = "translateY(" + scrollPos + "px)";
        orbPicture.style.transform += "scale(" + (scrollPos/50 + 1) + ")";
    }
};
window.onload = init;
