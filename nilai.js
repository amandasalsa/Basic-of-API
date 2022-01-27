const express = require("express")
const app = express()

//set to read a request data from JSON format
app.use(express.json())
// JSON = String

app.post("/nilai", (request, response) => {
    // menampung request data
    let data = request.body.nilai
    let ratarata = 0, rataratas = 0
    let lulus = []
    let tidaklulus = []

    for (let i = 0; i < data.length; i++) {
        ratarata += data[i].math + data[i].english
    }
    ratarata = ratarata/8

    for (let h = 0; h < data.length; h++){
        rataratas = (data[h].math+data[h].english)/2
        if (rataratas>=ratarata){
            lulus.push({
                nama : data[h].nama
            })
        } else if (rataratas<ratarata){
            tidaklulus.push({
                nama : data[h].nama
            })
        }
    }
    return response.json({
        "Lulus" : lulus,
        "Tidak Lulus" : tidaklulus,
        "Rata-Rata" : ratarata
    })

})

app.listen(8000, () => {
    console.log(`Server run on port 8000`);
})