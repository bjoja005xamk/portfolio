import {useState} from 'react';

function App() {

  const [painoindeksi, setPainoindeksi] = useState();
  const [pituus, setPituus] = useState();
  const [paino, setPaino] = useState();
  const [kuvaus, setKuvaus] = useState();
  const [virhe, setVirhe] = useState(null);


  const laskeIndeksi = () => {

    if (pituus <= 230 && pituus >= 100 && paino <= 230 && paino >= 30) {

    setPainoindeksi(`${paino}` / `${pituus}` / `${pituus}` * 10000 );

    if (painoindeksi < 18.5) {

      setKuvaus("Alipaino")

    } if (painoindeksi >= 18.5) {

      setKuvaus("Normaalipaino")
    
    } if (painoindeksi > 25) {

      setKuvaus("Ylipaino")
    }

    } else {

      setVirhe("Syöttötiedoissa on virhe. Käytä ainoastaan numeerisia arvoja väliltä 100 - 230 cm ja 30 - 230 kg")
    }

  }


  return (
    <div className="container">
      <h1>Oppimistehtävä 1: Painoindeksilaskuri</h1>

    <input type="text"
    id="pituus" className="form-control mb-2"
    placeholder="Syötä pituutesi senttimetreinä..."
    onChange={ (e) => {
                      setPituus(e.target.value)
                    }}
    ></input>

    <input type="text"
    id="paino" className="form-control mb-2"
    placeholder="Syötä painosi kilogrammoina..."
    onChange={ (e) => {
                      setPaino(e.target.value)
                      }}
    ></input>

    <button 
    className="btn btn-primary mb-2" 
    onClick={laskeIndeksi}>Laske painoindeksi</button>
    <br/>

    <div>{virhe}</div>
<div className="card card-body mt-2">
 
    {(painoindeksi)
    ? 
      (
      painoindeksi.toFixed(2)
      )
    : null
    }
    
    <br/>
    {kuvaus}

    </div>
</div>
  );
}

export default App;
