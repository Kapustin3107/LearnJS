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
    card.append(cardButton);

    return card;
}

let valuesArray = [
    {
        name: "some name",
        path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
        children: [{
            name: "some name",
            path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
            children: [{
                name: "some name",
                path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
                children: [
                    {
                        name: "some name",
                        path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
                    },
                    {
                        name: "some name",
                        path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
                    },
                    {
                        name: "some name",
                        path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
                    },
                    {
                        name: "some name",
                        path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
                    },
                ]
            }]
        }]
    },
    {
        name: "some name",
        path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        description: "some temt 2",
        onFunction: function(){
            console.log(this.name, this.path, this.description);
        },
        children: [{
            name: "some name",
            path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
            children: [{
                name: "some name",
                path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
                children: [{
                    name: "some name",
                    path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
                    children: [{
                        name: "some name",
                        path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
                        children: [{
                            name: "some name",
                            path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
                            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,epe dicta nihil ad perferendis velit!",
                        }]
                    }]
                }]
            }]
        }]
    },
    {
        name: "some name",
        path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        description: "some temt",
        onFunction: function(){
            console.log(this.name, this.path, this.description);
        },
    },
    {
        name: "some name",
        path: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        description: "hfjdfhdfdfdb  djshfsjfh hj jsdfh hjdfkdjfdf hfjdkfdjfk hj",
        onFunction: function(){
            console.log(this.name, this.path, this.description);
        },
    }
]


function recurs(arr){
    for(let i = 0; i < arr.length; i++){
        let newCard =  createCards(arr[i]);
        container.append(newCard);
        if(arr[i].children && arr[i].children.length){
            recurs(arr[i].children);
        }
    }
}
recurs(valuesArray);


