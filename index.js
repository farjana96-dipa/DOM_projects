


let div = null;
let demo1 = document.querySelector("#demo1");
let hxColor = null;


//step - 1 onload function

window.onload = ()=>{
    main();
}


function main(){
    const container = document.querySelector(".container");
    const btn = document.querySelector(".container .change_bk");
    const demo = document.querySelector("#demo");
    const cpyBtn = document.querySelector(".copy_btn");
    
    const cpyBtn1 = document.querySelector(".copy_btn1");
    


    //step-3 create event on button

    btn.addEventListener("click",function(){
        const bgColor = HexadecimalColor();
        container.style.backgroundColor = bgColor;
        demo.value = bgColor.substring(1);
        randomRGBcolor(bgColor);
    });


    //copy to clipboard by copy button
    cpyBtn.addEventListener("click", function(){
        navigator.clipboard.writeText(`#${demo.value}`);
        if(div != null){
            div.remove();
            div = null;
        }
        if(isValidHex(demo.value)){
            generateTostmsg(`#${demo.value} copied`);
        }
        else{
            alert("Hex Value is Invalid!!!");
        }
       
    })

    //Copy the RGB color from clipboard

    cpyBtn1.addEventListener("click", function(){
        navigator.clipboard.writeText(demo1.value);
        if(div != null){
            div.remove();
            div = null;
        }
        generateTostmsg1(`${demo1.value} copied`);
        /*
        if(isValidHex(demo.value)){
            generateTostmsg(`#${demo.value} copied`);
        }
        else{
            alert("Hex Value is Invalid!!!");
        }
       */
    })



    demo.addEventListener("keyup", function(e){
        const color = e.target.value;
        if(color){
            demo.value = e.target.value.toUpperCase();
            hxColor = e.target.value;
            let r = parseInt(hxColor.substr(0,2),16);
            let g = parseInt(hxColor.substr(2,2),16);
            let b = parseInt(hxColor.substr(4,2),16);
            demo1.value = `rgb(${r},${g},${b})`;
           
        }
        if(isValidHex(color)){
            container.style.backgroundColor = `#${color}`;
        }
    });
    
}
//step -2 create random rgb color generator
/*
function randomRGBcolor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}*/
/* HexadecimalColor generator */
function HexadecimalColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);


    demo1.value = `rgb(${red},${green},${blue})`;

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`.toUpperCase();
}

/* gEnerate Toast message */

function generateTostmsg(msg){
    div = document.createElement("div");
    div.innerText = msg;
    div.className = "toast-message toast-message-slide-in";
    div.addEventListener("click",function(){
        div.classList.remove("toast-message-slide-in");
        div.classList.add("toast-message-slide-out");

        div.addEventListener("animationend", function(){
            div.remove();
        })
    })
    document.body.appendChild(div);
}

function generateTostmsg1(msg){
    div = document.createElement("div");
    div.innerText = msg;
    div.className = "toast-message1 toast-message1-slide-in";
    div.addEventListener("click",function(){
        div.classList.remove("toast-message1-slide-in");
        div.classList.add("toast-message1-slide-out");

        div.addEventListener("animationend", function(){
            div.remove();
        })
    })
    document.body.appendChild(div);
}


/* Check the hex color validity */

function isValidHex(color){

    if(color.length < 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}