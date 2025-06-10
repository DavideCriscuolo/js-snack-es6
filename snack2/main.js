// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const clubs = [
  {
    name: "Roma",
    points: 0,
    falliSub: 0,
  },
  {
    name: "Inter",
    points: 0,
    falliSub: 0,
  },
  {
    name: "Napoli",
    points: 0,
    falliSub: 0,
  },
  {
    name: "Milan",
    points: 0,
    falliSub: 0,
  },
  {
    name: "Juventus",
    points: 0,
    falliSub: 0,
  },
  {
    name: "Torino",
    points: 0,
    falliSub: 0,
  },
  {
    name: "Fiorentina",
    points: 0,
    falliSub: 0,
  },
  {
    name: "Lazio",
    points: 0,
    falliSub: 0,
  },
  {
    name: "Bologna",
    points: 0,
    falliSub: 0,
  },
  {
    name: "Genova",
    points: 0,
    falliSub: 0,
  },
];

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

const clubsNameFalliSub = [];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
for (let i = 0; i < clubs.length; i++) {
  const club = clubs[i];

  club.points = getRndInteger(0, 80);
  club.falliSub = getRndInteger(0, 30);
  const nuovo = {
    name: club.name,
    falliSubiti: club.falliSub,
  };
  clubsNameFalliSub.push(nuovo);
}
console.log(clubs);
console.log(clubsNameFalliSub);
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
