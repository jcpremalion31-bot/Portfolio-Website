const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

function showSkill(imagePath){
    const viewer = document.getElementById("skillViewer");

    if (viewer.style.display === "block" && viewer.src.includes(imagePath)) {
        viewer.style.display = "none";
    } else {
        viewer.src = imagePath;
        viewer.style.display = "block";
    }
}

