





//step - 1 onload function

window.onload = ()=>{
    main();
}


function main(){
    const container = document.querySelector(".container");
    const btn = document.querySelector(".container .change_bk");


    //step-3 create event on button
    
    btn.addEventListener("click",function(){
        const bgColor = randomRGBcolor();
        container.style.backgroundColor = bgColor; 
    });
    
}
//step -2 create random rgb color generator

function randomRGBcolor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}



