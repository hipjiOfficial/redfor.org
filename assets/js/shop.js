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

fetch("https://api.redfor.org/shop")
    .then(res => res.json())
    .then(data => {
        setCardImage("pc1", data.pc1);
        setCardImage("pc2", data.pc2);
        setCardImage("pc3", data.pc3);
    })