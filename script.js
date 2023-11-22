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
    if (scrollPos <= maxScroll) {
        updatePositions(scrollPos, maxScroll);
    } else {
        updatePositions(maxScroll, maxScroll);
    }
};

const updatePositions = (scrollPos, maxScroll) => {
    if (scrollPos === 0) canPlayAudio = true;

    const domainPicture = document.querySelector(".domain-background");
    const gojoPicture = document.querySelector(".gojo-picture");
    const orbPicture = document.querySelector(".orb-picture");

    const rocksZeroPicture = document.querySelector(".rocks-zero-picture");
    const rocksOnePicture = document.querySelector(".rocks-one-picture");
    const rocksTwoPicture = document.querySelector(".rocks-two-picture");
    const rocksThreePicture = document.querySelector(".rocks-three-picture");
    const rocksFourPicture = document.querySelector(".rocks-four-picture");
    const rocksFivePicture = document.querySelector(".rocks-five-picture");
    const rocksSixPicture = document.querySelector(".rocks-six-picture");
    const rocksSevenPicture = document.querySelector(".rocks-seven-picture");

    domainPicture.style.width = (scrollPos / (maxScroll / 100)) + "%";

    if (scrollPos < 10) gojoPicture.style.filter = "drop-shadow(0 0 1px black)";
    else gojoPicture.style.filter = "drop-shadow(0 0 8px purple)";
    gojoPicture.style.transform = "translateX(-50%)";
    gojoPicture.style.transform += "scale(" + (1 - (scrollPos/300)) + ")";
    orbPicture.style.transform = "translateY(" + ((scrollPos - (scrollPos / 2)) + (scrollPos/20 * 7)) + "px)";
    orbPicture.style.transform += "translateX(" + (scrollPos / 4) + "px)";
    orbPicture.style.transform += "scale(" + (scrollPos/80) + ")";

    rocksZeroPicture.style.transform = "translateX(-50%)";
    rocksZeroPicture.style.transform += "translateY(" + (scrollPos - (scrollPos/10 * 30)) + "px)";
    rocksZeroPicture.style.transform += "scale(" + (scrollPos/maxScroll) + ")";

    rocksOnePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 30)) + "px)";
    rocksOnePicture.style.transform += "scale(" + (0.5+(scrollPos/maxScroll)) + ")";

    rocksTwoPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 19)) + "px)";
    rocksTwoPicture.style.transform += "scale(" + (1.5-(scrollPos/maxScroll)) + ")";
    
    rocksThreePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 32)) + "px)";
    rocksThreePicture.style.transform += "scale(" + (0.5+(scrollPos/maxScroll)) + ")";
    
    rocksFourPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 25)) + "px)";
    rocksFourPicture.style.transform += "scale(" + (1.5-(scrollPos/maxScroll)) + ")";
    
    rocksFivePicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 35)) + "px)";
    rocksFivePicture.style.transform += "scale(" + (1.9-(scrollPos/maxScroll)) + ")";
    
    rocksSixPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 19)) + "px)";
    rocksSixPicture.style.transform += "scale(" + (0.5+(scrollPos/maxScroll)) + ")";
    
    rocksSevenPicture.style.transform = "translateY(" + (scrollPos - (scrollPos/10 * 28)) + "px)";
    rocksSevenPicture.style.transform += "scale(" + (1.5-(scrollPos/maxScroll)) + ")";
        
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
