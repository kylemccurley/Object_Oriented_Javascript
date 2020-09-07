function makeProduct(id, name, stock, price) {
  return {
    id: id,
    name: name,
    stock: stock,
    price: price,
    setPrice(newPrice) {
      if (newPrice < 0) {
        alert('Invalid Price');
        return;
      }

      this.price = newPrice;
    },

    describe(product) {
      prompt('Name: ' + this.name);
      prompt('ID: ' + this.id);
      prompt('Price: $' + this.price);
      prompt('Stock: ' + this.stock);

      function prompt(message) {
        console.log('=> ' + message);
      }
    }
  }
}

let scissors = makeProduct(0, 'Scissors', 8, 10);
let drill = makeProduct(1, 'Cordlesss Drill', 15, 45);
scissors.describe();
