const express = require("express");
const app = express();
app.get('/home', (req, res) => {
    return res.send('Hello, World!')
})

const port = 3000
app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})