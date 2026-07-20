/* playercard */

function setUserCard(cardName) {
    const cardImg = document.getElementById('player-playercard');
    const basePath = `/playercards/${cardName}`;
    const extensions = ["gif","png"];
    let i = 0;
    function tryLoad() {
        if (i >= extensions.length) {
            cardImg.onerror = null;
            cardImg.src = '/playercards/Lost Media.png';
            return;
        }
        cardImg.src = `${basePath}.${extensions[i]}`;
        i++;
    }
    cardImg.onerror = tryLoad;
    tryLoad();
}

/* skin */

function setUserSkin(skinName) {
    const skinImg = document.getElementById('player-skin');
    const basePath = `/skins/${skinName}`;
    const extension = ["png"];

    let i = 0;

    function tryLoad() {
        if (i >= extension.length) {
            skinImg.onerror = null;
            skinImg.src = '/skins/Lost Media Skin.png';
            return;
        }
        skinImg.src = `${basePath}.${extension[i]}`;
        i++;
    }
    skinImg.onerror = tryLoad;
    tryLoad();
}

/* avatar */

function setUserAvatar(username) {
    const avatarImg = document.getElementById('player-avatar');
    
    // avatarImg.src = ``;
}

// ill call from roblox later idk

/* name */

fetch('api')
    .then(res => res.json())
    .then(data => {
        setUserName(data.name);
    });

// text fitting function
function fitText(el, maxWidth, minSize = 10, maxSize = 24) {
    let size = maxSize;
    el.style.fontSize = size + 'px';

    while (el.scrollWidth > maxWidth && size > minSize) {
        size -= 1;
        el.style.fontSize = size + 'px';
    }
}

function setUserName(name) {
    const nameEl = document.getElementById('player-name');
    nameEl.textContent = name;
    fitText(nameEl, nameEl.parentElement.clientWidth - 10);
}

/* user statistics */