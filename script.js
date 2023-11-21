let canPlayAudio = true;

const init = () => {
    window.onscroll = () => {
        playAudio();
        updateParallax();
    }

    document.querySelector("#unmute-button").addEventListener("click", unmuteAudioPlayer)
};

const updateParallax = () => {
    const maxScroll = 200;
    const scrollPos = window.scrollY;
    if (scrollPos === 0) canPlayAudio = true;

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
        domainPicture.style.width = (scrollPos / (maxScroll / 80)) + "vmax";
        domainPicture.style.height = (scrollPos / (maxScroll / 80)) + "vmax";
        domainPicture.style.transform = "translate(-50%," + (scrollPos / (maxScroll / 70))/2 + "vmax)";

        gojoPicture.style.transform = "translate(-50%," + (scrollPos + (scrollPos/10 * 2)) + "px)";

        orbPicture.style.transform = "translateY(" + (scrollPos + (scrollPos/10 * 7)) + "px)";
        orbPicture.style.transform += "scale(" + (scrollPos/20) + ")";

        rocksOnePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 30)) + "px)";
        rocksTwoPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 19)) + "px)";
        rocksThreePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 32)) + "px)";
        rocksFourPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 25)) + "px)";
        rocksFivePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 35)) + "px)";
        rocksSixPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 19)) + "px)";
        rocksSevenPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 28)) + "px)";
    } else {
        domainPicture.style.width = "80vmax";
        domainPicture.style.height = "80vmax";
    }
};

const playAudio = () => {
    const audioPlayer = document.querySelector("#audio-player");
    if (window.scrollY <= 500) audioPlayer.volume = 0.5 - (window.scrollY / 1000);

    if (audioPlayer.paused && canPlayAudio) {
        audioPlayer.play();
        canPlayAudio = false;
    }
};

const unmuteAudioPlayer = () => {
    const audioPlayer = document.querySelector("#audio-player");
    audioPlayer.muted = !audioPlayer.muted;
}
window.onload = init;
