const container = document.querySelector('.container');
console.log(container);

const main = document.querySelector(".main");
const heading = document.createElement("div");
heading.style.marginTop = "20px";

const setButton = document. createElement('button');
setButton.innerText = " Set button";
heading.appendChild(setButton);
main.appendChild(heading);
setButton.style.marginLeft = "890px";

setButton.addEventListener("click",() => {
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
        

    const userInput = prompt(" Enter the number you want to grid the square");


    for(let i = 1; i<=userInput; i++){

        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.justifyContent = "space-evenly";
        row.style.width = "100%";
        row.style.height = "100%";
    
            for(let j=1; j<=userInput;j++){
            const square = document.createElement("div");
            square.style.border = " 1px solid black";
            square.style.width = "100%";
            square.addEventListener("mouseover",() =>{
                square.style.backgroundColor = "gold";
            })
            console.log(i);
            console.log(row);
            console.log(container);
            square.style.h
            row.appendChild(square);
    }   
    
        container.appendChild(row); 
    
    }

})
