const init = () => {
    window.onscroll = updateParallax;
};

const updateParallax = () => {
    const scrollPos = window.scrollY;

    const gojoPicture = document.querySelector(".gojo-picture");
    const orbPicture = document.querySelector(".orb-picture");
    const rocksOnePicture = document.querySelector(".rocks-one-picture");
    const rocksTwoPicture = document.querySelector(".rocks-two-picture");
    const rocksThreePicture = document.querySelector(".rocks-three-picture");
    const rocksFourPicture = document.querySelector(".rocks-four-picture");
    const rocksFivePicture = document.querySelector(".rocks-five-picture");
    const rocksSixPicture = document.querySelector(".rocks-six-picture");
    const rocksSevenPicture = document.querySelector(".rocks-seven-picture");

    if (scrollPos < 200) {
        gojoPicture.style.transform = "translate(-50%," + (scrollPos + (scrollPos/10 * 2)) + "px)";

        orbPicture.style.transform = "translateY(" + (scrollPos + (scrollPos/10 * 8)) + "px)";
        orbPicture.style.transform += "scale(" + (scrollPos/10 + 1) + ")";

        rocksOnePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 30)) + "px)";
        rocksTwoPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 13)) + "px)";
        rocksThreePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 25)) + "px)";
        rocksFourPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 20)) + "px)";
        rocksFivePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 35)) + "px)";
        rocksSixPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 15)) + "px)";
        rocksSevenPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 22)) + "px)";
    }
};
window.onload = init;
