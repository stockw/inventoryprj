const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const app = express()
const Item = require('./Models/items');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: '*'
  }));
  // allows use of req.body
  app.use(express.json());

let connectionString = `mongodb+srv://${process.env.MONGOOSEUSERNAME}:${process.env.MONGOOSEPASSWORD}@mongosetupcluster.1dnn4wp.mongodb.net/Inventory?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  });
 
  mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
  });


app.post('/create_item', async (req, res) => {
    const {nameString: name, priceNumber: price, inventoryNumber: inventory, nextDeliveryDate: nextDelivery, deliveryAmntNumber: deliveryAmnt} = req.body;
    console.log(req.body);
    console.log(deliveryAmnt);
    let returnedValue = await Item.create({
        name,
        price,
        inventory,
        nextDelivery,
        deliveryAmnt
    })

    console.log(returnedValue);
    if (returnedValue) {
        console.log("Upload Complete");
    }
    res.send(returnedValue)
})

app.get('/get_inv_data', async (req, res) => {
    let response = await Item.find({});
    console.log(response);
    res.json(response);
})

// app.findByIdAndDelete("id", )


 app.listen(5000, () => {
    console.log('Server is listening on port 5000')
 });