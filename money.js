// Formater to display money.
var money = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  module.exports.money = money;