let express = require("express")

let app = express()

app.get("/kubus/:sisi", (request, response) => {
    // Tampung data yg dikirimkan
    let sisi = request.params.sisi

    let volume = null
    let luas = null

    volume = sisi * sisi * sisi
    luas = 6 * sisi
    
    return response.json({
        message: `Hasil Volume dan Luas Permukaan Kubus dengan sisi ${sisi} cm adalah ${volume} & ${luas}`
    })
})

app.get("/balok/:panjang/:lebar/:tinggi", (request, response) => {
    // Tampung data yg dikirimkan
    let panjang = request.params.panjang
    let lebar = request.params.lebar
    let tinggi = request.params.tinggi

    let volume = null
    let luas = null

    volume = panjang * lebar * tinggi
    luas = 2 * (panjang * lebar) + (panjang * tinggi) + (tinggi * lebar)
    
    return response.json({
        message: `Hasil Volume dan Luas Permukaan Balok dengan panjang ${panjang} cm, lebar ${lebar} cm, tinggi ${tinggi} cm adalah ${volume} & ${luas}`
    })
})

app.get("/tabung/:jarijari/:tinggi", (request, response) => {
    // Tampung data yg dikirimkan
    let jarijari = request.params.jarijari
    let tinggi = request.params.tinggi

    let volume = null
    let luas = null

    volume = 3.14 * jarijari * jarijari * tinggi
    luas = 2 * 3.14 * jarijari * (jarijari + tinggi)
    
    return response.json({
        message: `Hasil Volume dan Luas Permukaan Tabung dengan jari-jari ${jarijari} cm, tinggi ${tinggi} cm adalah ${volume} & ${luas}`
    })
})

app.get("/bola/:jarijari", (request, response) => {
    // Tampung data yg dikirimkan
    let jarijari = request.params.jarijari

    let volume = null
    let luas = null

    volume = 4/3 * 3.14 * jarijari * jarijari * jarijari
    luas = 4 * 3.14 * jarijari * jarijari 
    
    return response.json({
        message: `Hasil Volume dan Luas Permukaan Bola dengan jari-jari ${jarijari} cm adalah ${volume} & ${luas}`
    })
})

app.listen(8000, () => {
    console.log('Server run on port 8000');
})