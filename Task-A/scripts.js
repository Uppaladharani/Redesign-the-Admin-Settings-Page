function filterSettings() {
    const filter = document.getElementById("settings-filter").value;
    const items = document.querySelectorAll(".settings-item");
    items.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}
