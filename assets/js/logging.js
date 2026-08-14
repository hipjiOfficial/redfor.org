// user sends log
// if date already exsists reject. 
// message: thank you for your submission, however another agent has fufilled today's report. or maybe just silent reject?
// 
const commonCards = [
    "321",
    "Are You Seizon",
    "Black Ice",
    "Blue Decay",
    "Bubble Gum",
    "Chalked",
    "Circuit",
    "Drama",
    "Duck",
    "Eat Up",
    "Emerald",
    "Galaxy",
    "Glitch",
    "Green Skulls",
    "Hearts N Flowers",
    "Hello",
    "Hyper Tension",
    "Junglist",
    "Lightning Bolt",
    "Meh",
    "Newborn Star",
    "Off We Go",
    "One Point For Me",
    "Ocean",
    "Pearly Whites",
    "Pentagon Dreams",
    "Pattern",
    "Pop Art",
    "Red Forest",
    "Ricochet",
    "Rhombus Space",
    "Seeing Grey",
    "Shinobi",
    "Splatter",
    "Teal Star",
    "Timebomb",
    "Water Ops",
    "White Eye"
];

const uncommonCards = [
    "Beyond",
    "Binary",
    "Cat",
    "Crackshot",
    "Dansen",
    "Electroshock",
    "Foggy",
    "Funky",
    "Global Unification",
    "Graph Paper Sketches",
    "Good Weather",
    "Instagib",
    "Inside Universe",
    "MOAB",
    "Neva Catch Me",
    "Notebook Sketch",
    "Peace In War",
    "Rage",
    "Rave",
    "Retro Rampage",
    "Runt",
    "Safeguard",
    "Savages",
    "Sneaky",
    "Take It Easy",
    "To Pay Respects",
    "Vandalism"
];

const rareCards = [
    "9 Hour Work Day",
    "Another Niko",
    "Anime Blufor",
    "Anime Redfor",
    "Bombhawks",
    "Childhood Memories",
    "Crossroads",
    "Freakout",
    "Gone Fishing",
    "Imageboard",
    "May Heaven Grant You Fortune",
    "Mesmerizer",
    "Mega Bombers",
    "Niko",
    "Party All The Time",
    "Present Day",
    "Rude Bomber",
    "See-Through",
    "The Choice",
    "To Hell With Me",
    "What Am I Fighting For"
];

const epicCards = [
    "Ascii White",
    "Dead On",
    "Defuse The Bomb",
    "Double Team",
    "Hi There",
    "Lightweight",
    "My Bombsite Was Burned To A Crisp",
    "Slashd",
    "Throwing Knife",
    "Toxic",
    "You Are An Idiot"
];

const skins = [
    "Alphabet Agency",
    "Apex Predators",
    "Boonie Bandits",
    "Cold Front",
    "Combat Medics",
    "Cops And Robbers",
    "El Dorado",
    "Frogmen",
    "Great War",
    "The Streets",
    "Winter Ops"
];

function populateCardDropdown(selectId, includeEpics = false, placeholderText) {
  const select = document.getElementById(selectId);
  if (!select) return;
  select.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = placeholderText || "Select a card...";
  placeholder.disabled = true;
  placeholder.selected = true;
  select.appendChild(placeholder);

  const groups = [
    { label: "Common", cards: commonCards },
    { label: "Uncommon", cards: uncommonCards },
    { label: "Rare", cards: rareCards },
  ];

  if (includeEpics) {
    groups.push({ label: "Epic", cards: epicCards });
  }

  groups.forEach(({ label, cards }) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = label;
    cards.forEach((card) => {
      const option = document.createElement("option");
      option.value = card;
      option.textContent = card;
      optgroup.appendChild(option);
    });
    select.appendChild(optgroup);
  });
}

function populateSkinDropdown(selectId, placeholderText) {
  const select = document.getElementById(selectId);
  if (!select) return;
  select.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = placeholderText || "Select a skin...";
  placeholder.disabled = true;
  placeholder.selected = true;
  select.appendChild(placeholder);

  skins.forEach((skin) => {
    const option = document.createElement("option");
    option.value = skin;
    option.textContent = skin;
    select.appendChild(option);
  });
}
populateCardDropdown("card1", true, "select first card");
populateCardDropdown("card2", false, "select second card");
populateCardDropdown("card3", false, "select third card");
populateSkinDropdown("skin", "select skin");