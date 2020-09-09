function makeList() {
  return {
    items: [],
    list() {
      this.items.forEach((item) => {
        console.log(item);
      });
    },

    add(item) {
      this.items.push(item);
      return `${item} added!`;
    }, 

    remove(item) {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
      return `${item} removed!`;
    },
  }
}

let list = makeList();
list.add('peas');
// peas added!
list.list();
// = peas
list.add('corn');
// = corn added!
list.list();
// = peas
// = corn
list.remove('peas');
// = peas removed!
list.list();
// = corn
