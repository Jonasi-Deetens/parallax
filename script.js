const init = () => {
    window.onscroll = updateParallax;
};

const updateParallax = () => {
    const maxScroll = 200;
    const scrollPos = window.scrollY;

    const domainPicture = document.querySelector(".domain-background");
    const gojoPicture = document.querySelector(".gojo-picture");
    const orbPicture = document.querySelector(".orb-picture");
    const rocksOnePicture = document.querySelector(".rocks-one-picture");
    const rocksTwoPicture = document.querySelector(".rocks-two-picture");
    const rocksThreePicture = document.querySelector(".rocks-three-picture");
    const rocksFourPicture = document.querySelector(".rocks-four-picture");
    const rocksFivePicture = document.querySelector(".rocks-five-picture");
    const rocksSixPicture = document.querySelector(".rocks-six-picture");
    const rocksSevenPicture = document.querySelector(".rocks-seven-picture");

    if (scrollPos <= maxScroll) {
        if (scrollPos >= 150) {
            domainPicture.style.width = "100vmax";
            domainPicture.style.height = "100vmax";
            if (scrollPos <= 180) domainPicture.style.borderRadius = (50 * ((180 - scrollPos) / 30)) + "%";
        } else {
            domainPicture.style.borderRadius = "100%";
            domainPicture.style.width = (scrollPos / 3) * 2 + "vmax";
            domainPicture.style.height = (scrollPos / 3) * 2 + "vmax";
        }

        gojoPicture.style.transform = "translate(-50%," + (scrollPos + (scrollPos/10 * 2)) + "px)";

        orbPicture.style.transform = "translateY(" + (scrollPos + (scrollPos/10 * 8)) + "px)";
        orbPicture.style.transform += "scale(" + (scrollPos/10 + 1) + ")";

        rocksOnePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 30)) + "px)";
        rocksTwoPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 19)) + "px)";
        rocksThreePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 32)) + "px)";
        rocksFourPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 25)) + "px)";
        rocksFivePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 35)) + "px)";
        rocksSixPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 19)) + "px)";
        rocksSevenPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 28)) + "px)";
    } else {
        domainPicture.style.width = "100vmax";
        domainPicture.style.height = "100vmax";
        domainPicture.style.borderRadius = "0%";
    }
};
window.onload = init;
