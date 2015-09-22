var randomNumber = require('./randomnumber');
var convert = require('./convert');

var moolah = function() {
    return convert(randomNumber(100, 1000000));
};

var accountBalance = function() {
    return "Account balance: \n"
};

exports.accountBalance = accountBalance;
exports.moolah = moolah;
