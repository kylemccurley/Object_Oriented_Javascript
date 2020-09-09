function makeBank() {
  let accounts = [];
  return {
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },
  }
}

function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  return {
    deposit(amount) {
      transactions.push({
        type: 'deposit',
        amount: amount,
      });

      balance += amount;
      return amount;
    },

    withdraw(amount) {
      this.transactions.push({
        type: 'withdraw',
        amount: amount,
      });

      let rawBalance = this.balance - amount;
      if (rawBalance < 0) {
        this.balance = 0;
      } else {
        this.balance -= amount;
      }

      return amount;
    },

    balance() {
      return balance;
    },

    number() {
      return number;
    },

    transactions() {
      return transactions;
    }
  }
}

let bank = makeBank();
let account = bank.openAccount();
account.balance();
// = 0
account.deposit(17);
// = 17
let secondAccount = bank.openAccount();
secondAccount.number();
// = 102
account.transactions();
// [Object]
