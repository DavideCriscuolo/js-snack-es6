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
let pesoMinimo = bikes[0].peso;
let biciMin = bikes[0];
for (let i = 0; i < bikes.length; i++) {
  const bike = bikes[i];

  const pesoBike = bike["peso"];

  if (pesoBike < pesoMinimo) {
    pesoMinimo = pesoBike;
    biciMin = bike;
    console.log(`La bici che pesa di meno è ${biciMin["name"]}`);
  }
}
