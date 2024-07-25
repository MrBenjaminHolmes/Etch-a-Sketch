let tool = "";
let mousedown = false;
let over= false;
let penColour = "#000000";

function buttonSelected(num){
    if(num===1 ){
        penBtn[num].style.transform = "scale(1.05)";
        penBtn[num].style.backgroundColor = "#1f1f1f";
        penBtn[num].style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.445)";
        penBtn[num].classList.add("rainbow")
        tool = "rainbow"
        console.log("Tool :"+tool);
        }
    else{
        penBtn[num].style.transform = "scale(1.05)";
        penBtn[num].style.backgroundColor = "#1f1f1f";
        penBtn[num].style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.445)";
        if (num === 0){
            tool = "pen";
            console.log("Tool :"+tool);
        }
        if (num === 2){
            tool = "eraser";
            console.log("Tool :"+tool);
        }

    }
    
}
function buttonUnselected(num1,num2){
    penBtn[num1].style.transform = "scale(1)";
    penBtn[num1].style.backgroundColor = "#363636";
    penBtn[num1].style.boxShadow = "none";
    penBtn[num2].style.transform = "scale(1)";
    penBtn[num2].style.backgroundColor = "#363636";
    penBtn[num2].style.boxShadow = "none";
    penBtn[num1].classList.remove("rainbow");
    penBtn[num2].classList.remove("rainbow");


}
function makeGrid(size){
    container.innerHTML=""
    const cellSize = 560/size;
    for(let y = 0; y < size; y++){
        for(let x = 0; x < size; x++){    
            const cell = document.createElement("div");
            cell.classList.add('cell');
            cell.style.width = cellSize+"px";
            cell.style.height = cellSize+"px";
            container.appendChild(cell);
            cell.addEventListener("mouseover",()=>{
                over=true;
                if(over===true && mousedown === true){
                    if (tool ==="rainbow")
                    {
                        let randomColour = randomRGB();
                        cell.style.backgroundColor="rgb("+randomColour+")";
                    }
                    if (tool ==="pen")
                    {
                        cell.style.backgroundColor= penColour;
                    }
                    if (tool ==="eraser")
                    {
                            cell.style.backgroundColor= "#dadada";
                    }
                   
                }
            })
            over=false;
            cell.addEventListener("click",()=>{ 
                if (tool ==="rainbow")
                {
                    randomColour = randomRGB();
                    cell.style.backgroundColor="rgb("+randomColour+")";
                }
                if (tool ==="pen")
                {
                    cell.style.backgroundColor= penColour;
                }
                if (tool ==="eraser")
                {
                    cell.style.backgroundColor= "#dadada";
                }
            })
            
            
        }
    }
}
function randomRGB(){
    let rValue = Math.floor(Math.random()*255);
    let gValue = Math.floor(Math.random()*255);
    let bValue = Math.floor(Math.random()*255);
    return [rValue,bValue,gValue];

}

const colourInput = document.querySelector("input");
const body = document.querySelector("body");
const container = document.getElementById("container");
const penBtn = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click",()=>{
    makeGrid(slider.value);
})

colourInput.addEventListener("input",()=>{
    penColour = colourInput.value;
})

penBtn[0].addEventListener("click", () => {
    buttonUnselected(1,2);
    buttonSelected(0);
});

penBtn[1].addEventListener("click", () => {
    buttonUnselected(0,2);
    buttonSelected(1);
});

penBtn[2].addEventListener("click", () => {
    buttonUnselected(0,1);
    buttonSelected(2);
});

slider.addEventListener("input",()=>{
    makeGrid(slider.value);
    const sliderValue = slider.value;
    const sliderText = document.querySelector("h2");
    sliderText.innerHTML= sliderValue+"X"+sliderValue;
})

document.addEventListener("mousedown", () => {
    mouseDown = true;
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
});




makeGrid(16);
buttonSelected(0);
buttonUnselected(1,2);

document.addEventListener("mousedown",()=>{
    mousedown = true;
})
document.addEventListener("mouseup",()=>{
    mousedown = false;
})



