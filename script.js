const gridContainer = document.querySelector(".grid-container");
const gridButton = document.querySelector(".grid-button");

let gridSize = 16;

function createGrid(gridSize) {
    gridContainer.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid");
        gridContainer.appendChild(gridItem);
    }

    document.documentElement.style.setProperty("--grid-size", gridSize);
}

gridButton.addEventListener("click", () => {
    gridSize = prompt("Enter new grid size (e.g., 16 for 16x16 grid):", 16);
    if (gridSize > 100) {
        alert(
            "Grid size too large. Please enter a number less than or equal to 100."
        );
        return;
    }
    createGrid(gridSize);
});

createGrid(gridSize);

gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid")) {
        event.target.style.backgroundColor = "black";
    }
});
