'use strict';

var assert = require('assert');
var pf = require('./');

describe('pf(9)', function(){
	it('finds the prime factors of 9', function(){
		assert.deepEqual(pf(9), [3, 3]);
	});
});

describe('pf(28)', function(){
	it('finds the prime factors of 28', function(){
		assert.deepEqual(pf(28), [2, 2, 7]);
	});
});

describe('pf(72)', function(){
	it('finds the prime factors of 72', function(){
		assert.deepEqual(pf(72), [2, 2, 2, 3, 3]);
	});
});
