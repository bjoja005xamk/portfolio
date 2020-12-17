const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const portti = 3020;

const ilmoitukset = require("./models/myyntiIlmoitukset")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended" : true }));

app.set("views", "./views");
app.set("view engine", "ejs");


app.post("/tallennaMuokkaus", (req, res) => {

    ilmoitukset.muokkaaIlmoitusta(req.body, (err) => {

        if (err) throw err; 

        res.redirect("/");

    });

});

app.get("/muokkaa/:id", (req, res) => {

    let id = req.params.id;

    ilmoitukset.haeIlmoitus(id, (err, data) => {

        if (err) throw err; 

        res.render("muokkaa", {"ilmoitus" : data[0]});
});
});


app.post("/tallenna", (req, res) => {


    ilmoitukset.luoIlmoitus(req.body, (err) => {

        if (err) throw err;

        res.redirect("/");

    });

});

app.get("/luoIlmoitus", (req, res) => {


        res.render("luoIlmoitus", {});


});

app.get("/", (req, res) => {

    ilmoitukset.haeKaikkiIlmoitukset((err, data) => {

        if (err) throw err;

        res.render("index", { "ilmoitukset" : data });

    });


});




app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin: ${portti}`);

});