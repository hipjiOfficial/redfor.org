const commonCards = [
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
];
const uncommonCards = [
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
];
const rareCards = [
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
];
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
const limitedCards = [
    "Bomb.png",
    "Fumos.png"
];
// i would love to eventually be able to display every single christmas (are there christmas cards?) and halloween card, but we'll never get another seasonal update until i buy the game
const achievementCards = [
    "Chibi Blufor.png",
    "Chibi Redfor.png",
    "Clean House.png",
    "Close Call.png",
    "Default.png",
    "Fumo.png",
    "Gib Master.png",
    "Grenadier.png",
    "Hit By Pitch.png",
    "I C Thru U.png",
    "Jack Of All Trades.png",
    "Knife Mastery.png",
    "Let's Tango.png",
    "Long Distance Friendship.png",
    "MVP.png",
    "Plant Site Is Two Blocks Down.png",
    "Rage Quit.png",
    "Recon.png",
    "Red4 And Blu4.png",
    "She's On Fire.png",
    "Shining Lights.png",
    "Top Elite.png",
    "Unstoppable.png",
    "XXHEAD_SHOTXX.png"
]; // missing: premium, walking billboard
// i dont have premium and it wont let me preview it because my chat window aligns itself EXACTLY over the inspect button.

const commonContainer = document.getElementById("commonCards");
const uncommonContainer = document.getElementById("uncommonCards");
const rareContainer = document.getElementById("rareCards");
const epicContainer = document.getElementById("epicCards");
const limitedContainer = document.getElementById("limitedCards");
const achievementContainer = document.getElementById("achievementCards")

commonCards.forEach(card => {
    const img = document.createElement("img");
    img.src = `playercards/${card}`;
    img.alt = card.replace(".png", "");
    commonContainer.appendChild(img);
});
uncommonCards.forEach(card => {
    const img = document.createElement("img");
    img.src = `playercards/${card}`;
    img.alt = card.replace(".png", "");
    uncommonContainer.appendChild(img);
});
rareCards.forEach(card => {
    const img = document.createElement("img");
    img.src = `playercards/${card}`;
    img.alt = card.replace(".png", "");
    rareContainer.appendChild(img);
});
epicCards.forEach(card => {
    const img = document.createElement("img");
    img.src = `playercards/${card}`;
    img.alt = card.replace(".gif", "");
    epicContainer.appendChild(img);
});
limitedCards.forEach(card => {
    const img = document.createElement("img");
    img.src = `playercards/${card}`;
    img.alt = card.replace(".png", "");
    limitedContainer.appendChild(img);
});
achievementCards.forEach(card => {
    const img = document.createElement("img");
    img.src = `playercards/${card}`;
    img.alt = card.replace(".png", "");
    achievementContainer.appendChild(img);
});

// card preview
const allCards = document.querySelectorAll(".gallery img");
allCards.forEach(card => {
    card.addEventListener("click", () => openCardPreview(card.src, card.alt));
});