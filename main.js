"use strict"
//app with cat image
const container = document.querySelector(".container");

//const card = document.querySelector(".card");

function createCards(options){
    //creatind div element with class ":card"
    let card = document.createElement("div");
    card.className = "card";

    let cardImgContainer = document.createElement('div');
    cardImgContainer.className = "card__img";
    card.append(cardImgContainer);

    //creating img element to append to created element before
    let cardImage = document.createElement("img");
    //creating path for img tag
    cardImage.src = options.path;
    cardImage.width = 200;
    cardImage.height = 200;
    //adding img to the card
    cardImgContainer.append(cardImage);

    let cardName = document.createElement('h3');
    cardName.className = "card__title"
    cardName.innerText = options.name;
    card.append(cardName);


    let cardParagraph = document.createElement('p');
    cardParagraph.className = "card__info";
    cardParagraph.innerText = options.description;
    card.append(cardParagraph);

    let cardButton = document.createElement('button');
    cardButton.className = "card__btn";
    cardButton.type = "button";
    cardButton.innerText = "Click Me!";
    cardButton.addEventListener("click", options.onFunction.bind(options));
    card.append(cardButton);

    return card;
}

let valuesArray = [
    {
        name: "Cat",
        path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corrupti! Provident voluptatum rem dolorum saepe dicta nihil ad perferendis velit!",
        onFunction: function(){
            console.log(this.name, this.path, this.description);
        }
    },
    {
        name: "Pug",
        path: "https://image.freepik.com/free-psd/adorable-pug-puppy-solo-portrait_53876-74000.jpg",
        description: "some temt",
        onFunction: function(){
            console.log(this.name, this.path, this.description);
        }
    },
    {
        name: "Doge",
        path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMDNppkD2WlQzAeK2B6QC6kE6TkQ3ggYugA&usqp=CAU",
        description: "some temt",
        onFunction: function(){
            console.log(this.name, this.path, this.description);
        }
    },
    {
        name: "Boroda",
        path: "https://content.fortune.com/wp-content/uploads/2020/06/David-Cote.jpg",
        description: "hfjdfhdfdfdb  djshfsjfh hj jsdfh",
        onFunction: function(){
            console.log(this.name, this.path, this.description);
        }
    }

]

for(let i = 0; i < valuesArray.length; i++){
    let newCard =  createCards(valuesArray[i]);
    container.append(newCard);
}

console.log(createCards(values));
