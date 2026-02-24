// version control
document.addEventListener("DOMContentLoaded", () => {
    const versionEl = document.getElementById("version-number");
    if (!versionEl) return;

    versionEl.textContent = "v" + window.version;
});
// window.version = "1.0.0"; // first release
// window.version = "1.0.1"; // added defuse the bomb gif
// window.version = "1.1.0"; // gallery page added
window.version = "1.2.0"; // Javascript rearrangement. Removed every instance of a <script> tag and replaced them with specific .js files. Minor changes to gallery and shop, including rewriting styles to better fit mobile and smaller screens.