document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.getElementById("clan-tooltip");
    const images = document.querySelectorAll(".list-item-icon");

    images.forEach((img) => {
        img.addEventListener("mouseenter", (e) => {
            const clanName = img.getAttribute("data-clan");
            tooltip.textContent = clanName;
            tooltip.style.display = "block";
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        img.addEventListener("mousemove", (e) => {
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        img.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    });
});
