const http = require("http");
const url = require("url");

const portti = 3101;

const fs = require('fs');

const serveri = http.createServer((req, res) => {

    if (req.url != "/favicon.ico") {

    let tiedot = url.parse(req.url, true).query;
    console.log(tiedot);

    let nimi = (tiedot.nimi) ? tiedot.nimi : "tyhja";
    let email = (tiedot.email) ? tiedot.email : "tyhja";
    let kayttoehdot = (tiedot.kayttoehdot) ? tiedot.kayttoehdot : "tyhja";


    res.writeHead(200, { "Content-type" : "text/html; charset=utf-8"});
    
    if ((nimi!= "tyhja") && email != "tyhja" && kayttoehdot != "tyhja"){
        res.write(`Olet tilannut onnistuneesti uutiskirjeemme. Kiitos!`);

        let lukumaara = 0;
        lukumaara++;
        console.log("Uusi tilaus vastaanotettu. Tilauksia yhteensä" + " " + lukumaara + "kpl");

        fs.writeFile("tilaukset.txt", tiedot.nimi + "\n" + tiedot.email, function (err) {
            if (err) throw err;
        })
        
    }
    else {
        res.write(`Anna nimesi sekä sähköpostiosoitteesi ja hyväksy käyttöehdot`);
    }
    res.end();


    }

});

serveri.listen(portti, () => {
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   
});