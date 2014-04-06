'use strict';

var primes = require('primes');
var isprime = require('isprime');

/**
 *	Get the prime factors of a number
 *	@param {Number} num
 */

module.exports = function(num) {
  if (!num || num === 1) return [];
  // protect the recursion
  return factor(num);
};

function factor (num, arr) {
  arr = arr || [];

  if (isprime(num)) {
    arr.push(num);
    return arr;
  };

  var plist = primes(num);
  var modNum;
  
  for (var i = 0; i<plist.length; i++) {
    if (num % plist[i] === 0) {
      modNum = plist[i];
      break;
    };
  };

  arr.push(modNum);

  return factor(num / modNum, arr);
};
