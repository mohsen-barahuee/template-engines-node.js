const express = require('express')
const path = require("path")
const app = express()
app.use('/static', express.static('public'))
app.set("view engine", 'pug')
app.set("views", path.join(__dirname, "views"))


app.get('/', (req, res) => {
    res.render("index")
})

app.listen(4001, () => {
    console.log("Server is Runing on port 4001");

})






