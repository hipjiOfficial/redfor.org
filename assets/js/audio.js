// background music
const audio = document.getElementById("bgm");
if (audio) {
    audio.volume = 0.4;
    audio.play().catch(() => {});
}

// ui sounds
const burgerClickSound = new Audio("/assets/audio/Select_2.mp3");
burgerClickSound.volume = 0.6;
burgerClickSound.preload = "auto";

const navHoverSound = new Audio("/assets/audio/Hover.mp3");
navHoverSound.volume = 0.4;
navHoverSound.preload = "auto";

const cardPreviewClickSound = new Audio("/assets/audio/Select_2.mp3");
cardPreviewClickSound.volume = 0.4;
cardPreviewClickSound.preload = "auto";

const cardPreviewClickoffSound = new Audio("/assets/audio/Select.mp3"); // i should enter a contest for best variable names ever
cardPreviewClickoffSound.volume = 0.4;
cardPreviewClickoffSound.preload = "auto";

document.querySelectorAll(".menu-card a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        navHoverSound.currentTime = 0;
        navHoverSound.play();
    });
});
