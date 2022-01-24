let express = require("express")

let app = express()

app.get("/bmi", (request, response) => {
    // tampung data tinggi dan berat
    let tinggi = request.params.tinggi
    let berat = request.params.berat

    let bmi = berat / (tinggi * tinggi)

    let status = null
    
    if (bmi < 18.5) {
        status = 'Kekurangan Berat Badan'
    }else if (bmi >= 18.5 && bmi < 25){
        status = 'Normal ( Ideal )'
    }else if (bmi >= 25 && bmi < 30){
        status = 'Kelebihan Berat Badan'
    }else if (bmi >= 30){
        status = 'Kegemukan( Obesitas )'
    }

    return response.json({
        Tinggi : tinggi,
        Berat: berat,
        Bmi: bmi,
        Status: status
    })
})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})