const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;


//Static files 
app.use(express.static('public'));

//Templating Engine
app.set('views', "./src/views")
app.set('view engine', 'ejs')

app.get("/", function(req, res){

})

app.listen(port, () => console.log(`Listening on port ${port}`))