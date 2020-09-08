function makeCountry(givenName, givenContinent, givenVisited) {
  return {
    name: givenName,
    continent: givenContinent,
    visited: givenVisited || false,
    visitCountry() {
      this.visited = true;
    },
    getDescription() {
      let sentence = (this.name + ' is located in ' + this.continent + '. I ');
      sentence += this.visited ? "haven't" : 'have'
      sentence += ' visited ' + this.name + '.';

      return sentence;
    },
  }
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

chile.getDescription();       // "The Republic of Chile is located in South America."
canada.getDescription();      // "Canada is located in North America."
southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."
