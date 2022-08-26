//kirjautumisen avaaminen
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Ostoskori
let ostosKori = [];

$(document).ready(function(){
	$(document).ready(function(){
		$.ajax({url: "server/data/data.json",success: function(result) { 				
			//lähetetään palvelimelta tullut data (result-array) parsittavaksi.				
			tulostaLuettelo(result); 
		}, error: function(xhr){ //Virheen käsittely, jos esim. tiedostoa ei löydy
			alert("Virhe!"); //Tähän tulee tilanteeseen sopiva virheen käsittely
		}
	});
});

$(".valintaNappi").click(function(){
    $("select").change(function(){
        $(".response").text("This is content "+$(this).val());
    });
});

//Ostoskorin tulostus
$("#tulostaOstoskori").click(function(){
		//Haetaan palvelimelta tiedosto tuoteluettelo.json
		$.ajax({url: "server/data/data.json",success: function(result) { 				
				let ostosKoriRivi = "";
				for(i = 0;i < ostosKori.length; i++){ 	
					ostosKoriRivi += result.ruokalista[ostosKori[i] - 1].nimi + " " + result.ruokalista[ostosKori[i] - 1].hinta + "<div class='response'></div>" + "<br/>";	
	
				}
				$("#tulostusAlue").html(ostosKoriRivi);
		}, error: function(xhr){ //Virheen käsittely, jos esim. tiedostoa ei löydy
			alert("Virhe!"); //Tähän tulee tilanteeseen sopiva virheen käsittely
		}
	});
});
	
//Ostoskoriin lisääminen
	$("#tulostusAlue").on("click",".valintaNappi",function(e){
				e.preventDefault();
				alert( "Lisätty tuote ostoskoriin");
				let id = $(this).attr("id");
				ostosKori.push(id);				
	});
});


//***********************************************************************
//Tulostetaan kaikki tuotteet ja nappi, jolla voi lisätä ostoskoriin 
function tulostaLuettelo(result){ //saa koko tiedoston
	var luettelo = "<table id='taulukko' border='1'>"; 
	for(i = 0;i < result.ruokalista.length; i++){ 
		luettelo += "<tr><td>" + result.ruokalista[i].nimi + "</td><td>" + result.ruokalista[i].ainekset + "</td><td>" + result.ruokalista[i].hinta + "</td><td>" + "</td><td>" + "<select><option value='' disable selected>Valitse päivä</option><option value='maanantai'>Maanantai</option><option value='tiistai'>tiistai</option><option value='keskiviikko'>Keskiviikko</option><option value='Torstai'>Torstai</option><option value='perjantai'>Perjantai</option><option value='lauantai'>Lauantai</option><option value='sunnuntai'>Sunnuntai</option></select>" + "</td><td>" + "</td><td><button class='valintaNappi' id='" + result.ruokalista[i].id + "'>Lisää ostoskoriin</button></td></tr>";		
	}
	luettelo += "</table>"; //taulukon lopetus
	
	//tulostus diville		
	$("#tulostusAlue").html(luettelo);		
};

//peruuta nappi
function peruuta() {
	var peruuta = document.getElementById("peruuta");
	if (peruuta.style.display === "block") {
	  peruuta.style.display = "none";
	} else {
	  peruuta.style.display = "block";
	}
  }

  //jatka  nappi
  function jatka() {
	var jatka = document.getElementById("tulostaOstoskori");
	if (jatka.style.display === "none") {
	  jatka.style.display = "block";
	} else {
	  jatka.style.display = "none";
	}
  }

  function jatka2() {
	var jatka2 = document.getElementById("jatka2");
	if (jatka2.style.display === "block") {
	  jatka2.style.display = "none";
	} else {
	  jatka2.style.display = "block";
	}
  }


function tulostaTiedot() {
	document.getElementById("tulostus").innerHTML = 
		document.getElementById("tiedot").value;
}

function showInput() {
	document.getElementById('display').innerHTML = 
				document.getElementById("user_input").value;
}

//kirjautuminen
function checkPswd() {
	var confirmPassword = "admin";
	var password = document.getElementById("pswd").value;
	if (password == confirmPassword) {
	  window.location = "admin.html";
	}
  }