var convertThis = require('./randomnumber');

var convertNumber = function(num) {
    var dollars = (num / 100).toFixed(2);
    return "$" + dollars;
};

module.exports = convertNumber;