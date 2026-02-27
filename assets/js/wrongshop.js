// wrong shop reporting
document.getElementById("shop-report-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await fetch("/api/upload-shop-report", {
        method: "POST",
        body: formData
    });

    alert("Thank you for your screenshot. The shop should be updated shortly.");
});