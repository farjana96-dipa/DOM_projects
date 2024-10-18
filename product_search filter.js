let products = {
    data:[
        {
            productName : "Beige Lawn",
            category : "Lawn",
            price : "$150",
            image : "../images/BIEGE-LAWN-3-PIECE-533x800.webp"

        },
        {
            productName : "Yellow Lawn",
            category : "Lawn",
            price : "$180",
            image : "../images/Small-Medium-Large-3-scaled-430x645.webp"

        },
        {
            productName : "Green Lawn",
            category : "Lawn",
            price : "$250",
            image : "../images/DYED-CAMBRIC-TROUSER-2-scaled-430x645.webp"

        },
        {
            productName : "Blue Chiffon Three Piece",
            category : "Chiffon",
            price : "$160",
            image : "../images/SHOOT-FINAL76-618x800.webp"

        },
        {
            productName : "Mustard Chiffon Three Piece",
            category : "Chiffon",
            price : "$265",
            image : "../images/MUSTARD-CHIFFON-3-PIECE-scaled-430x287.webp"

        },
        {
            productName : "Pink Chiffon Three Piece",
            category : "Chiffon",
            price : "$325",
            image : "../images/CIGARETTE-PANT-FABRIC-RAW-SILK-scaled-430x287.webp"

        },
        {
            productName : "Golden Mesuri Three Piece",
            category : "Mesuri",
            price : "$90",
            image : "../images/IMG_6751-scaled-430x645.webp"

        },
        {
            productName : "Peach Blush Mesuri Three Piece",
            category : "Mesuri",
            price : "$75",
            image : "../images/PEACH-BLUSH-LAWN-3-PIECE-scaled-430x645.webp"

        },
    ],
};

for(let i of products.data){


    //create card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    //img_tag
    let img_cont = document.createElement("div");
    img_cont.classList.add("img-cont");

    //add image
    let image = document.createElement("img");
    image.setAttribute("src",i.image);

    img_cont.appendChild(image);

    card.appendChild(img_cont);

    //container create
    let container = document.createElement("div");
    container.classList.add("container");

    //name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    

    //price
    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);


}

// Create filter function
function filterProducts(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach( (button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");

    elements.forEach((element)=>{
        if(value == "All"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    })
}


document.getElementById("search").addEventListener("click", ()=>{
    let searchinput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");

    let cards = document.querySelectorAll(".card");

    elements.forEach((element,index)=>{
        if(element.innerText.includes(searchinput.toUpperCase())){
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })
})

// initially show all products
window.onload = () => {
    filterProducts("All");
}