function kastTerning() {
    console.log("Terningen er kastet");
    
    let tal;
    tal = Math.floor((Math.random() * 6) + 1);
  
    console.log("Terning er kastet, det blev "+ tal + "");

    let terning = document.getElementById("ree").innerHTML = tal;
  }