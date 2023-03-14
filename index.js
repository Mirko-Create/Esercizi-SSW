

const books = [
  { autore: 'Italo Calvino', titolo: 'Il barone rampante' },
  { autore: 'J.D. Salinger', titolo: 'Il giovane Holden' },
  { autore: 'Margaret Atwood', titolo: 'Il racconto dell\'ancella' },
  { autore: 'Italo Svevo', titolo: 'La coscienza di Zeno' },
  { autore: 'Alessandro Manzoni', titolo: 'I promessi sposi' },
];

const autore = 'italo calvino'; // stringa da cercare (in minuscolo)
let count = 0; // contatore dei libri che corrispondono alla ricerca

books.forEach((book) => {
  const titoloAutore = `${book.titolo} ${book.autore}`.toLowerCase();
  if (titoloAutore.includes(autore)) {
    count++;
    console.log(`Titolo: ${book.titolo}\nAutore: ${book.autore}\n`);
  }
});

if (count === 0) {
  console.log(`Nessun libro corrisponde alla ricerca "${autore}".`);
} else if (count === 1) {
  console.log(`Trovato 1 libro corrispondente alla ricerca "${autore}".`);
} else {
  console.log(`Trovati ${count} libri corrispondenti alla ricerca "${autore}".`);
}


class Libro {
  constructor(titolo, autore, anno, genere) {
    this.titolo = titolo;
    this.autore = autore;
    this.anno = anno;
    this.genere = genere;
  }
}

class Archivio {
  constructor(libri) {
    this.libri = libri;
  }

  cercaLibri(stringa) {
    const libriCorrispondenti = this.libri.filter((libro) => {
      const titoloAutore = libro.titolo.toLowerCase() + " " + libro.autore.toLowerCase();
      return titoloAutore.includes(stringa.toLowerCase());
    });

    return libriCorrispondenti;
  }
}

const libri = [
  new Libro("Il signore degli anelli", "J.R.R. Tolkien", 1954, "Fantasy"),
  new Libro("Il nome della rosa", "Umberto Eco", 1980, "Mistero"),
  new Libro("Cien años de soledad", "Gabriel Garcia Marquez", 1967, "Realismo magico"),
  new Libro("1984", "George Orwell", 1949, "Distopia"),
];

const archivio = new Archivio(libri);


console.log(archivio.cercaLibri("anelli"));
// Output: [Libro {titolo: "Il signore degli anelli", autore: "J.R.R. Tolkien", anno: 1954, genere: "Fantasy"}]

console.log(archivio.cercaLibri("il"));
// Output: [Libro {titolo: "Il signore degli anelli", autore: "J.R.R. Tolkien", anno: 1954, genere: "Fantasy"}, Libro {titolo: "Il nome della rosa", autore: "Umberto Eco", anno: 1980, genere: "Mistero"}]
