let canPlayAudio = true;
let frame = 0;

const init = () => {
    // window.onscroll = () => {
    //     playAudio();
    //     updateParallax();
    // }
    document.querySelector("#unmute-button").addEventListener("click", playParallax);
};

const playParallax = () => {
    playAudio();
    setInterval(() => {
        if (frame <= 200) updateParallax();
        else return;
    }, 15);
};

const updateParallax = () => {
    const maxFrame = 200;

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

    if (frame <= maxFrame) {
        domainPicture.style.width = (frame / (maxFrame / 90)) + "vmax";
        domainPicture.style.height = (frame / (maxFrame / 90)) + "vmax";
        domainPicture.style.transform = "translate(-50%," + (frame / (maxFrame / 70))/2 + "vmax)";

        gojoPicture.style.transform = "translate(-50%," + (frame + (frame/10 * 2)) + "px)";

        orbPicture.style.transform = "translateY(" + (frame + (frame/20 * 7)) + "px)";
        orbPicture.style.transform += "scale(" + (frame/40) + ")";

        rocksOnePicture.style.transform = "translateY(" + (frame - (frame/10 * 30)) + "px)";
        rocksTwoPicture.style.transform = "translateY(" + (frame - (frame/10 * 19)) + "px)";
        rocksThreePicture.style.transform = "translateY(" + (frame - (frame/10 * 32)) + "px)";
        rocksFourPicture.style.transform = "translateY(" + (frame - (frame/10 * 25)) + "px)";
        rocksFivePicture.style.transform = "translateY(" + (frame - (frame/10 * 35)) + "px)";
        rocksSixPicture.style.transform = "translateY(" + (frame - (frame/10 * 19)) + "px)";
        rocksSevenPicture.style.transform = "translateY(" + (frame - (frame/10 * 28)) + "px)";
    } else {
        domainPicture.style.width = "90vmax";
        domainPicture.style.height = "90vmax";
    }

    frame++;
};

const playAudio = () => {
    const audioPlayer = document.querySelector("#audio-player");
    audioPlayer.muted = false;

    if (audioPlayer.paused) {
        audioPlayer.play();
    }
};

const unmuteAudioPlayer = () => {
    const audioPlayer = document.querySelector("#audio-player");
    audioPlayer.muted = !audioPlayer.muted;
}
window.onload = init;
