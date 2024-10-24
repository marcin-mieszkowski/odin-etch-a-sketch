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
    createGrid(gridSize);
});

createGrid(gridSize);
