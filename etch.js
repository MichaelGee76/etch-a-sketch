// Create Section
// Heading
const heading = document.createElement("h1");
heading.textContent = "Etch-A-Sketch";
// Canvas/Grid
const grid = document.createElement("div");
grid.setAttribute("id", "container");

grid.style.border = "1rem groove black";
grid.style.borderRadius = "8px"
grid.style.display = "grid";
grid.style.margin = "auto";
grid.style.boxShadow = "10px 5px 5px gray";
grid.style.background = 'rgb(239, 244, 234)';

const gridHeight = grid.style.width = "500px";
const gridWidth = grid.style.height = "500px";

defaultGrid();   

// Functions

function defaultGrid() {
    gridNumber = 16;
    const rows = gridNumber;
    const columns = gridNumber;
    grid.style.setProperty("grid-template-columns", "repeat(" + gridNumber + ", 1fr)");
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("item");            
            for (let i = 0; i < gridNumber; i++)
            gridItem.addEventListener("mousemove", () => {
                gridItem.style.background = "black"; 
                
            })
            grid.appendChild(gridItem);

        }

    }
}

function resetCanvas() {
    grid.innerHTML = "";
    defaultGrid();    
}

function setGridSize() {
    const gridSize = parseInt(prompt("Grid size? Type a number between 16 - 100"));
    
    if (gridSize > 100) {
        alert("Number too big. Please choose a number between 16-100.");
        return;
    } if (gridSize < 16) {
        alert("Number too big. Please choose a number between 16-100.");
        return;
    } else {
        
        const rows = gridSize;
        const columns = gridSize;
        grid.style.setProperty("grid-template-columns", "repeat(" + gridSize + ", 1fr)");
        grid.innerHTML = "";

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                const gridItem = document.createElement("div");
                gridItem.classList.add("item");
                gridItem.addEventListener("mousemove", () => {
                    gridItem.style.background = "black";
                })                
                grid.appendChild(gridItem);

            }
        }

    }
}

function getRandomColor() {
    
    let red = Math.floor(Math.random() * (255 - 16) ); 
    let green = Math.floor(Math.random() * (255 - 8));
    let blue = Math.floor(Math.random()  * (255 -24));
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
    
}

function setRandomColors() {    
    const coloredItems = Array.from(document.getElementsByClassName("item"));
    for (let item of coloredItems) {
        item.addEventListener("mousemove", () => {
            item.style.background =  getRandomColor();
        })
    }    
}

function setBlackColor() {
    
    const blackItem = Array.from(document.getElementsByClassName("item"));
                    
        for (let item of blackItem) {
            item.addEventListener("mousemove", () => {
                item.style.background = "black";               
                
            })
        }
        
}

// Buttons

const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.marginTop = "2rem";
buttonContainer.style.justifyContent = "space-around";

buttonContainer.style.width = "600px";
buttonContainer.style.margin = "auto";

const resetBtn = document.createElement("button");
resetBtn.textContent = "RESET";
resetBtn.classList.add("buttons");
resetBtn.addEventListener("click", (resetCanvas)); 

const sizeBtn = document.createElement("button");
sizeBtn.textContent = "SIZE";
sizeBtn.classList.add("buttons");
sizeBtn.addEventListener("click", (setGridSize));

const colorBtn = document.createElement("button");
colorBtn.textContent = "ADD COLORS";
colorBtn.classList.add("buttons");
colorBtn.addEventListener("click", (setRandomColors));

const blackBtn = document.createElement("button");
blackBtn.textContent = "BACK TO BLACK";
blackBtn.classList.add("buttons");
blackBtn.addEventListener("click", (setBlackColor));


// Footer
const footer = document.createElement("div");
footer.setAttribute("id", "footer");
footer.style.display = "flex";
footer.style.justifyContent = "center";

const para = document.createElement("p");
para.textContent = 'Made with \u2661 \u00A9 Michael Gee 12/23'
para.style.fontSize = "1rem";
para.style.fontWeight = "300";
para.style.marginTop = "3rem";

// Apply Section

document.body.appendChild(heading);
document.body.appendChild(grid);
document.body.appendChild(buttonContainer);
buttonContainer.appendChild(resetBtn);
buttonContainer.appendChild(sizeBtn);
buttonContainer.appendChild(colorBtn);
buttonContainer.appendChild(blackBtn);
document.body.appendChild(footer);
footer.appendChild(para);





















































