let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timom',
  species: 'Suricata suricatta',
}; // Generates a new object, does not mutate

menagerie.meerkat = animal;
console.log(menagerie);
menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true
