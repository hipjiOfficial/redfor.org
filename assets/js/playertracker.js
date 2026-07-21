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
    // put in the roblox avatar link later
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

/* level and xp */

function setLevelXP(level, current, max) {
    document.getElementById('xp-current').textContent = current;
    document.getElementById('xp-max').textContent = max;
    const fill = document.getElementById('xp-fill');
    fill.style.width = `${(current / max) * 100}%`;
}

/* user statistics */

function setPlayerStats(stats) {
    document.getElementById('stat-wins').textContent = stats.wins;
    document.getElementById('stat-losses').textContent = stats.losses;
    document.getElementById('stat-wl').textContent = stats.losses > 0
        ? (stats.wins / stats.losses).toFixed(2)
        : stats.wins.toFixed(2);
    document.getElementById('stat-kills').textContent = stats.kills;
    document.getElementById('stat-deaths').textContent = stats.deaths;
    document.getElementById('stat-kd').textContent = stats.deaths > 0
        ? (stats.kills / stats.deaths).toFixed(2)
        : stats.kills.toFixed(2);
    document.getElementById('stat-assists').textContent = stats.assists;
    document.getElementById('stat-headshots').textContent = stats.headshots;
    document.getElementById('stat-longshots').textContent = stats.longshots;
    document.getElementById('stat-wallbangs').textContent = stats.wallbangs;
    document.getElementById('stat-collaterals').textContent = stats.collaterals;
    document.getElementById('stat-damage').textContent = stats.damage.toLocaleString();
    document.getElementById('stat-dominations').textContent = stats.dominations;
    document.getElementById('stat-revenges').textContent = stats.revenges;
    document.getElementById('stat-plants').textContent = stats.plants;
    document.getElementById('stat-defusals').textContent = stats.defusals;
    document.getElementById('stat-timespent').textContent = formatTime(stats.timeSpentSeconds);
}
 
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    return `${hrs}h ${mins}m`;
}

async function loadPlayer(playerName) {
    if (!playerName || playerName.trim() === "") return;
    showLoadingState();
    try {
        // for testing purposes I have the fake json that looks like what the actual api would return.
        // swap to `/api/player/${encodeURIComponent(playerName)}` or something like that when api exists
        const response = await fetch(`/assets/json/playerData.${playerName}.json`);
        if (!response.ok) {
            throw new Error(`Player not found or data failed to load! status: ${response.status}`);
        }
        const data = await response.json();
        renderPlayer(data);
 
    } catch (error) {
        showErrorState(error.message);
    } finally {
        hideLoadingState();
    }
}

function renderPlayer(data) {
    setUserName(data.name);
    setLevelXP(data.level, data.xp.current, data.xp.max);
    setUserCard(data.playercard);
    setUserSkin(data.skin);
    setPlayerStats(data.stats);
    // setUserAvatar(data.avatarUrl); 
}

function showLoadingState() {
    document.getElementById('user-card').classList.add('loading');
}

function hideLoadingState() {
    document.getElementById('user-card').classList.remove('loading');
}

function showErrorState(message) {
    document.getElementById('player-name').textContent = 'Player not found';
    console.error('loadPlayer error:', message);
}

document.getElementById('player-name-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        loadPlayer(e.target.value);
    }
});


/* data structure example
{
  "name": "hipji",
  "level": 300,
  "xp": { "current": 6200, "max": 7950 },
  "playercard": "Bombhawks",
  "skin": "El Dorado",
  "stats": {
    "wins": 844,
    "losses": 803,
    "kills": 12206,
    "deaths": 7554,
    "assists": 1758,
    "headshots": 2906,
    "longshots": 427,
    "wallbangs": 247,
    "collaterals": 3,
    "damage": 1445742,
    "dominations": 387,
    "revenges": 30,
    "plants": 149,
    "defusals": 182,
    "timeSpentSeconds": 851400
  }
}*/