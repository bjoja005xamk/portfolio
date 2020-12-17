const mysql = require("mysql");

const yhteys = mysql.createConnection({
                                        "host" : "localhost",
                                        "user" : "root",
                                        "password" : "",
                                        "database" : "myynti_ilmoitukset"
                                        });

yhteys.connect((err) => {

    if (!err) {

        console.group("Yhteys tietokantapalvelimeen avattu!")

    } else {

        throw err;

    }

});

module.exports = {

    haeKaikkiIlmoitukset : (callback) => {

        let sql = "SELECT * FROM ilmoitukset ORDER BY aikaleima DESC";

        yhteys.query(sql, (err, data) => {

            callback(err, data)

        });


    },

    luoIlmoitus : (tiedot, callback) => {


        let sql = "INSERT INTO ilmoitukset SET id = ?, nimi = ?, hinta = ?, tiedot = ?, ilmoittaja = ?, email = ?, puh = ?";

        yhteys.query(sql, [tiedot.id, tiedot.nimi, tiedot.hinta, tiedot.tiedot, tiedot.ilmoittaja, tiedot.email, tiedot.puh], (err) => {

            callback(err);

        });


    },  
    
    haeIlmoitus : (id, callback) => {

        let sql = "SELECT * FROM ilmoitukset WHERE id = ?";

        yhteys.query(sql, [id], (err, data) => {

            callback(err, data);

        });
       

    },

    muokkaaIlmoitusta : (tiedot, callback) => {

        let sql = "UPDATE ilmoitukset SET nimi = ?, hinta = ?, tiedot = ?, ilmoittaja = ?, email = ?, puh = ? WHERE id = ?";

        yhteys.query(sql, [tiedot.nimi, tiedot.hinta, tiedot.tiedot, tiedot.ilmoittaja, tiedot.email, tiedot.puh, tiedot.id], (err) => {

            callback(err);

        });     

    }

}