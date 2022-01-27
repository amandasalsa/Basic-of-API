const express = require("express")
const app = express()

//set to read a request data from JSON format
app.use(express.json())
// JSON = String

app.post("/shop", (request, response) => {
    // menampung request data
    let data = request.body.shop
    let total = 0

    for (let i = 0; i < data.length; i++){
        total += data[i].harga * data[i].jumlah
        let ppn = (10*total)/100
        total += ppn
    }

    return response.json({
        "Total Belanja" : total,

    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})