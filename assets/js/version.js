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
window.version = "1.3.4"; // Added frogmen skin