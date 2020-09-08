/*
We'll build a simple todo list program using the techniques we've seen in this assignment. Write a makeList function that returns a new function that implements a todo list. The returned function should have the following behavior:

When called with an argument that is not already on the list, it adds that argument to the list.

When called with an argument that is already on the list, 
it removes the element from the list.

When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.
*/

function makeList() {
  let list = [];
  return function(...args) {
    if (args.length === 0) {
      if (list.length === 0) {
        return 'The list is empty.'
      } else {
        list.forEach((todo) => {
          console.log(todo);
        });
      }
    } else if (args.length > 0 && args.length < 2) {
      let todo = args[0];
      if (list.includes(todo)) {
        let index = list.indexOf(todo);
        delete list[index];
        return `${todo} removed!`;
      } else {
        list.push(todo);
        return `${todo} added!`;
      }

      list.push(todo);
      return `${todo} added!`;
    }
  }
}

let list = makeList();
list();
// The list is empty.

list('make breakfast');
// make breakfast added!

list('read book');
// read book added!

list();
// make breakfast
// read book

list('make breakfast');
// make breakfast removed!

list();
// read book
