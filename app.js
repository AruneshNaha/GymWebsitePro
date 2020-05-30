const express = require("express")
const path = require("path")
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost/contactus', { useNewUrlParser: true });
const port = 80;

//Define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    concern: String
});

var contact = mongoose.model('Contact', contactSchema);


//EXPRESS SPECIFIC STATIC FILE
//For serving static files
app.use('/static', express.static('static'));
app.use(express.urlencoded());

//Set the template engine as pug
app.set('view engine', 'pug')

//Set the vies directory
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const con = "This is the best content on internet"
    const params = { 'title': 'City gym body builder', "content": con }
    res.status(200).render('index.pug', params)
})

app.get('/contact', (req, res) => {
    const con = "This is the best content on internet"
    const params = { 'title': 'City gym body builder', "content": con }
    res.status(200).render('contact.pug', params)
})

app.post('/contact', (req, res) => {
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        req.status(400).send("The item was not saved to the database")
    })
    //res.status(200).render('contact.pug')
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})