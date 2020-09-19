function objectsEqual(obj1, obj2) {
  let keys1 = Object.getOwnPropertyNames(obj1).sort();
  let keys2 = Object.getOwnPropertyNames(obj2).sort();
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let index = 0; index < keys1.length; index++) {
    let key1 = keys1[index];
    let key2 = keys2[index];
    let value1 = obj1[keys1[index]];
    let value2 = obj2[keys2[index]];
    if (key1 !== key2 || value1 !== value2) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
