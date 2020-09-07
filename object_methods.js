let me = {
  firstName: 'Kyle',
  lastName: 'McCurley',
};

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

let people = {
  collection: [],

  fullName: function(person) {
    console.log([person.firstName,   person.lastName].join(' '));
  },

  rollCall: function() {
    if (this.collection.length === 0) {
      [me, mother, father, friend].forEach((person) =>{
        this.add(person);
      });
    }
  
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    let addIndex = this.collection.length;
    person.index = addIndex;
    this.collection.push(person);
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach((other, i) => {
      if (person.firstName === other.firstName &&
          person.lastName === other.lastName) {
            index = i;
          }
    });

    return index;
  },

  isInValidPerson: function(obj) {
    return (typeof obj.firstName !== 'string' ||
          typeof obj.lastName !== 'string');
  },

  remove: function(person) {
    if (this.isInValidPerson(person)) {
      return;
    }

    let index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  get: function(person) {
    if (this.isInValidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInValidPerson(person)) {
      return;
    }

    let index = this.getIndex(person);
    if (index === -1) {
      this.add(person);
    } else {
      this.collection[index] = person;
    }
  }
};

people.rollCall();
console.log(people);
people.add({firstName: 'Beth', lastName: 'MacBeth'});
console.log(people);

