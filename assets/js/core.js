// menu
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

if (burger && menu) {
    burger.addEventListener("click", () => {
        menu.classList.toggle("open");
        burgerClickSound.currentTime = 0;
        burgerClickSound.play();
    });
}

// shop reset timer
function getNextShopTimeUTC() {
    const now = new Date();
    const next = new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        0, 0, 0
    ));
    if (now >= next) {
        next.setUTCDate(next.getUTCDate() + 1);
    }
    return next;
}

function updateCountdown() {
    const el = document.getElementById("countdown");
    if (!countdown) return;
    const now = new Date();
    const next = getNextShopTimeUTC();

    let diff = Math.floor((next - now) / 1000);
    if (diff < 0) diff = 0;
    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;

    el.textContent =
        `${h.toString().padStart(2,"0")}:` +
        `${m.toString().padStart(2,"0")}:` +
        `${s.toString().padStart(2,"0")}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// card preview
function openCardPreview(src, alt) {
    const preview = document.createElement("div");
    preview.classList.add("card-preview");
    document.body.style.overflow = "hidden";
    cardPreviewClickSound.currentTime = 0;
    cardPreviewClickSound.play();

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;

    preview.appendChild(img);
    document.body.appendChild(preview);

    preview.addEventListener("click", () => {
        document.body.removeChild(preview);
        document.body.style.overflow = "";
        cardPreviewClickoffSound.currentTime = 0;
        cardPreviewClickoffSound.play();
    });
}