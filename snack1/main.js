//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

const bikes = [
  {
    name: "mountain-bike",
    peso: 20,
  },
  {
    name: "cross-bike",
    peso: 30,
  },
  {
    name: "small-bike",
    peso: 10,
  },
  {
    name: "big-bike",
    peso: 30,
  },
  {
    name: "kid-bike",
    peso: 15,
  },
  {
    name: "adult-bike",
    peso: 30,
  },
  {
    name: "bmx-bike",
    peso: 25,
  },
  {
    name: "mountain-bike",
    peso: 35,
  },
  {
    name: "mountain-bike",
    peso: 40,
  },
  {
    name: "mountain-bike",
    peso: 37,
  },
];

//Creiamo una variabile per tenere traccia del peso minimo
let pesoMinimo = bikes[0].peso;
// Creiamo una variabile per tener traccia della bici
let biciMin = bikes[0];

//iteriamo attrverso l'array
for (let i = 0; i < bikes.length; i++) {
  const bike = bikes[i]; // salviamo ogni singolo elemento dell array

  const pesoBike = bike["peso"]; //prendiamo il valore peso

  // diamo una condizione dove confrontiamo il peso
  if (pesoBike < pesoMinimo) {
    pesoMinimo = pesoBike; //aggiorniamo il peso con quello piu basso
    biciMin = bike; //aggiorniamo la bicicletta che pesa di meno
    console.log(`La bici che pesa di meno è ${biciMin["name"]}`);
  }
}
