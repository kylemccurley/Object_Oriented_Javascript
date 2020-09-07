let invoices = {
  unpaid: [],
  paid: [],

  add: function(client, owed) {
    this.unpaid.push({client, owed});
  },

  totalDue: function() {
    let acc = 0;
    this.unpaid.forEach((invoice) => {
      acc += invoice.owed;
    });

    return acc;
  },

  payInvoice: function(client) {
    let unpaidTemp = [];
    this.unpaid.forEach((invoice) => {
      if (client === invoice.client) {
        this.paid.push(invoice);
      } else {
        unpaidTemp.push(invoice);
      }
    });

    this.unpaid = unpaidTemp;
  },

  totalPaid: function() {
    let total = 0;
    this.paid.forEach((invoice) => {
      total += invoice.owed;
    });

    return total;
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
invoices.payInvoice('Slough Digital');
invoices.payInvoice('Due North Development');
console.log(invoices.totalPaid()); // 550
console.log(invoices.totalDue()); // Should log 187.50
