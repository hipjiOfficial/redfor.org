// fetching images
function setCardImage(imgId, cardName) {
    const img = document.getElementById(imgId);
    const basePath = `/playercards/${cardName}`;
    const extensions = ["png", "gif"];

    let i = 0;

    function tryLoad() {
        if (i >= extensions.length) {
            img.src = '/playercards/Lost Media.png';
            return;
        }
        img.src = `${basePath}.${extensions[i]}`;
        i++;
    }

    img.onerror = tryLoad;
    tryLoad();
}

function setSkinImage(imgId, skinName) {
    const img = document.getElementById(imgId);
    const basePath = `/skins/${skinName}`;
    const extension = ["png"];

    let i = 0

    function tryLoad() {
        if (i >= extension.length) {
            img.src = '/playercards/Lost Media.png'; // PLACEHOLDER! MAKE A LOST MEDIA SKIN SIZE!
            return;
        }
        img.src = `${basePath}.${extension[i]}`;
        i++;
    }

    img.onerror = tryLoad;
    tryLoad();
}

function shopPreview(imgId) {
    const img = document.getElementById(imgId);
    img.style.cursor = "pointer";
    img.addEventListener("click", () => openCardPreview(img.src, img.alt));
}

fetch("https://api.redfor.org/shop")
    .then(res => res.json())
    .then(data => {
        setCardImage("pc1", data.pc1);
        setCardImage("pc2", data.pc2);
        setCardImage("pc3", data.pc3);
        setSkinImage("skin", data.skin);
        shopPreview("pc1");
        shopPreview("pc2");
        shopPreview("pc3");
    });