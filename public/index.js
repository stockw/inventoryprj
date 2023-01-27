// const { response } = require("express");

console.log("Display Page");

let submitButton = document.getElementById('submit-item');

submitButton.addEventListener('click', async () => {
    let nameString = document.getElementById('name-input').value;
    let priceNumber = +document.getElementById('price-input').value;
    let inventoryNumber = +document.getElementById('inventory-input');
    let nextDeliveryDate = document.getElementById('nextDelivery-input').value;
    let delvieryAmntNumber = +document.getElementById('deliveryAmnt-input').value

    const Item = {
        nameString,
        priceNumber,
        inventoryNumber,
        nextDeliveryDate,
        delvieryAmntNumber
    }

    let response = await fetch('http://localhost:5000/create_item', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        // to send JSON data over HTTP
        body: JSON.stringify(Item)
    })
})

let containerElement = document.getElementById('container')
let newNameInput = document.getElementById('new-name')
const getData = async () => {
    let data = await fetch("http://localhost:5000/get_inv_data");
    data.json().then((parsedData) => {
        console.log(parsedData); // array of objects
        // map through and put in HTML
        // push each individual one,  or push an array of HTML 
        parsedData.forEach((object) => {
            // if not ready to eat- red text
            // let pTag = document.createElement("p"); // <p></p>
            // pTag.textContent = object.name; // <p>apple</p>
            // pTag.databaseId = object._id
            // if (object.readyToEat !== true) {
            //     pTag.style.color = "red"
            // } else {
            //     pTag.style.color = "green"
            // }
            // pTag.addEventListener('click', (event) => {
            //     console.log(event.target);
            //     console.log(event.target.databaseId);
            //     let newName = newNameInput.value;
            //     // make a call to server giving the ID of the thing to change
            //     console.log(newName);
            //     let newData = {
            //         newName,
            //         id: event.target.databaseId
            //     }
            //     let response = fetch
            // })
            // containerElement.appendChild(pTag);
        })
    })
}

getData()