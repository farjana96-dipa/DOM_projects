


let div = null;


//step - 1 onload function

window.onload = ()=>{
    main();
}


function main(){
    const container = document.querySelector(".container");
    const btn = document.querySelector(".container .change_bk");
    const demo = document.querySelector("#demo");
    const cpyBtn = document.querySelector(".copy_btn");


    //step-3 create event on button

    btn.addEventListener("click",function(){
        const bgColor = HexadecimalColor();
        container.style.backgroundColor = bgColor;
        demo.value = bgColor;
    });


    //copy to clipboard by copy button
    cpyBtn.addEventListener("click", function(){
        navigator.clipboard.writeText(demo.value);
        if(div != null){
            div.remove();
            div = null;
        }
        if(isValidHex(demo.value)){
            generateTostmsg(`${demo.value} copied`);
        }
        else{
            alert("Hex Value is Invalid!!!");
        }
       
    })

    demo.addEventListener("keyup", function(e){
        const color = e.target.value;
        console.log(color);
        if(color && isValidHex(color)){
            console.log(color);
            container.style.backgroundColor = color;
        }
    });
    
}
//step -2 create random rgb color generator

/*function randomRGBcolor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;
}
/* HexadecimalColor generator */
function HexadecimalColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
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


/* Check the hex color validity */

function isValidHex(color){

    if(color.length < 7) return false;
    if(color[0] != "#") return false;

    color  = color.substring(1);

    return /^[0-9A-Fa-f]{6}$/i.test(color);
}