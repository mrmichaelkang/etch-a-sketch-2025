const container = document.querySelector("#container");
let gridSize = 4;

container.style.width = "600px";//`${gridSize * 100}px`;
container.style.height = "400px";//`${gridSize * 100}px`; 

function highlightCell(event) {
  event.target.style.backgroundColor = "black";
}

function createGrid() {
  for(let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < gridSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell")

      cell.addEventListener("mouseenter", highlightCell);

      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

createGrid();