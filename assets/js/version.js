// version control
document.addEventListener("DOMContentLoaded", () => {
    const versionEl = document.getElementById("version-number");
    if (!versionEl) return;

    versionEl.textContent = "v" + window.version;
});
// window.version = "1.0.0"; // first release
// window.version = "1.0.1"; // added defuse the bomb gif
// window.version = "1.1.0"; // gallery page added
// window.version = "1.2.0"; // Javascript rearrangement. Removed every instance of a <script> tag and replaced them with specific .js files. Minor changes to gallery and shop, including rewriting styles to better fit mobile and smaller screens.
// window.version = "1.2.1"; //  New Site Logo' -m 'Added a temporary favicon.
// window.version = "1.2.2"; // Updated playercards/Childhood Memories.png May Heaven Grant You Fortune.png Rave.png & Safeguard.png. Added skins folder.
// window.version = "1.2.3"; // started work on letmeknow and wrongshop. added throwing knife gif. 
// window.version = "1.2.4"; // added pentagon dreams
// window.version = "1.2.5"; // changed about page to work better. added stub for forums. minor changes to about and wrongshop content.
// window.version = "1.3.0"; // Major shop rework. Added support for skins. The shop now immediatley scales for any device smaller than 1058px. May revise.
// window.version = "1.3.1"; // Added cards to limited section. Created brand new Achievements section and added many cards to it.
// window.version = "1.3.2"; // Added great war skin
// window.version = "1.3.3"; // Minor bug fixes. Fixed "Unstoppable" being incorrectly named. Fixed "Bomb" limited card accidentally appearing in the Achievements category.
// window.version = "1.3.4"; // Added frogmen skin
// window.version = "1.3.5"; // Added prices in gallery, including porting over the official bombline coin graphic. Changed readme to be more specific about which features had already been implemented.
// window.version = "1.3.6"; // Added What Am I fighting for
// window.version = "1.3.7"; // Updated Galaxy. Updated Funky.
// window.version = "1.3.8"; // Updated Seeing Grey.
// window.version = "1.3.9"; // updated timdebomb
// window.version = "1.3.10"; // Added Slash'd gif. I really should add a large feature so I can reset the version to 1.4 and not continue double digits on the hotfix number.
// window.version = "1.3.11"; // Added El Dorado to skin asset folder
// window.version = "1.3.12"; // Moved the card preview functionality to core.js so I can just load it and call openCardPreview(). This way I can have card previews on any page I want and not just gallery. One more reason for centralizing this is I want to eventually use the card preview to add that card to your wishlist, which LetMeKnow would be able to grab later.
window.version = "1.4.0"; // New og-image.php. Allows for a nice embed whenever someone posts www.redfor.org/shop.
