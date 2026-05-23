// generating a fake shop based on data collected from bombline

const shopPool = {
    common: [
        "321.png",
        "Are You Seizon.png",
        "Black Ice.png",
        "Blue Decay.png",
        "Bubble Gum.png",
        "Chalked.png",
        "Circuit.png",
        "Drama.png",
        "Duck.png",
        "Eat Up.png",
        "Emerald.png",
        "Galaxy.png",
        "Glitch.png",
        "Green Skulls.png",
        "Hearts N Flowers.png",
        "Hello.png",
        "Hyper Tension.png",
        "Junglist.png",
        "Lightning Bolt.png",
        "Meh.png",
        "Newborn Star.png",
        "Off We Go.png",
        "One Point For Me.png",
        "Ocean.png",
        "Pearly Whites.png",
        "Pentagon Dreams.png",
        "Pattern.png",
        "Pop Art.png",
        "Red Forest.png",
        "Ricochet.png",
        "Rhombus Space.png",
        "Seeing Grey.png",
        "Shinobi.png",
        "Splatter.png",
        "Teal Star.png",
        "Timebomb.png",
        "Vandalism.png",
        "Water Ops.png",
        "White Eye.png"
    ],
    uncommon: [
        "Beyond.png",
        "Binary.png",
        "Cat.png",
        "Crackshot.png",
        "Dansen.png",
        "Electroshock.png",
        "Foggy.png",
        "Funky.png",
        "Global Unification.png",
        "Graph Paper Sketches.png",
        "Good Weather.png",
        "Instagib.png",
        "Inside Universe.png",
        "MOAB.png",
        "Neva Catch Me.png",
        "Notebook Sketch.png",
        "Peace In War.png",
        "Rage.png",
        "Rave.png",
        "Retro Rampage.png",
        "Runt.png",
        "Safeguard.png",
        "Savages.png",
        "Sneaky.png",
        "Take It Easy.png",
        "To Pay Respects.png",
        "Vandalism.png"
    ],
    rare: [
        "9 Hour Work Day.png",
        "Another Niko.png",
        "Anime Blufor.png",
        "Anime Redfor.png",
        "Bombhawks.png",
        "Childhood Memories.png",
        "Crossroads.png",
        "Freakout.png",
        "Gone Fishing.png",
        "Imageboard.png",
        "May Heaven Grant You Fortune.png",
        "Mesmerizer.png",
        "Mega Bombers.png",
        "Niko.png",
        "Party All The Time.png",
        "Present Day.png",
        "Rude Bomber.png",
        "See-Through.png",
        "The Choice.png",
        "To Hell With Me.png",
        "What Am I Fighting For.png"
    ]
};

const epicCards = [
    "Ascii White.gif",
    "Dead On.gif",
    "Defuse The Bomb.gif",
    "Double Team.gif",
    "Hi There.gif",
    "Lightweight.gif",
    "My Bombsite Was Burned To A Crisp.gif",
    "Slashd.gif",
    "Throwing Knife.gif",
    "Toxic.gif",
    "You Are An Idiot.gif"
];

function buildPool() {
    // common: 42%, uncommon: 28%, rare: 25%
    shopPool.common.forEach(card => {
        for (let i = 0; i < 42; i++) shopPool.push({ card, rarity: 'common' });
    });
    shopPool.uncommon.forEach(card => {
        for (let i = 0; i < 28; i++) shopPool.push({ card, rarity: 'uncommon' });
    });
    shopPool.rare.forEach(card => {
        for (let i = 0; i < 25; i++) shopPool.push({ card, rarity: 'rare' });
    });
}

buildPool();

// basic structure testing

const day = new Date().getDay();
if (day === 6) {
    generateThursdayShop();
} else {
    generateShop();
}

function generateShop() {};

