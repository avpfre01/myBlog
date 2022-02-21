const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.get("/", function(req, res){

})

app.listen(port, () => console.log(`Listening on port ${port}`))