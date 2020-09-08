function later(func, arg) {
  return function () {
    return func(arg);
  }
}

let logWarning = later(console.log, 'The system is shutting down!');
logWarning();
