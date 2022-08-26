const fetch = require("node-fetch")
const xml2js = require("xml2js");

let haeArtikkelit = (url) => {

    return new Promise((resolve, reject) => {

        fetch(url).then((response) => {
    
            response.text().then((dataXML) => {
    
            xml2js.parseString(dataXML, (err, dataJSON) => {

                if (err) {

                    reject("Palvelimelta saatu tieto ei ole XML-muodossa")

                } else {

                    let kaikkiArtikkelit = [];

                    dataJSON.rss.channel[0].item.forEach((item) => {

                        let artikkeliObj = {
                                            "otsikko" : item.title[0],
                                            "linkki" : item.link[0],
                                            "pvm" : item.pubDate[0],
                                            "sisalto" : item.description[0],
                                            "kuva" : item.enclosure/url[0]
                                            }

                        kaikkiArtikkelit.push(artikkeliObj);

                    });

                    resolve(kaikkiArtikkelit);


                }

    
            });
    
    
    
            });
    
    
        }).catch((err) => {
    
            reject("Palvelimeen ei saada yhteyttä")
    
        });


    });

}

module.exports = {

    "haeKaikki" : (callback) => {

        let url = "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET";

        haeArtikkelit(url).then((artikkelit) => {

            callback(null, artikkelit);

        }).catch((err) => {

            callback(err, null);

        });

    }

}