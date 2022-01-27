const express = require("express")
const app = express()

//set to read a request data from JSON format
app.use(express.json())
// JSON = String

app.post("/money", (request, response) => {
    // menampung request data
    let butuhUang = request.body.money
    let pecahan = [100000,50000,20000,10000,5000,2000,1000,500,200,100]
    let hasil = []

    for (let i = 0; i < butuhUang.length; i++) {
        if (butuhUang >= pecahan[i]) {
        let count = Math.floor(butuhUang / pecahan[i])
        butuhUang = butuhUang % pecahan[i]

        hasil.push({
            Pecahan : pecahan[i],
            jumlah : count
        })
        }
    }

    return response.json({
        hasil
    })
})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})