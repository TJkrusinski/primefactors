'use strict';

var assert = require('assert');
var pf = require('./');

describe('pf(9)', function(){
	it('finds the prime factors of 9', function(){
		var res = pf(9);
		assert.equal(res[0], 3);
		assert.equal(res[1], 3);
		assert.equal(res.length, 2);
	});
});

describe('pf(28)', function(){
	it('finds the prime factors of 28', function(){
		var res = pf(28);
		assert.equal(res[0], 2);
		assert.equal(res[1], 2);
		assert.equal(res[2], 7);
		assert.equal(res.length, 3);
	});
});

describe('pf(72)', function(){
	it('finds the prime factors of 72', function(){
		var res = pf(72);
		assert.equal(res[0], 2);
		assert.equal(res[1], 2);
		assert.equal(res[2], 2);
		assert.equal(res[3], 3);
		assert.equal(res[4], 3);
		assert.equal(res.length, 5);
	});
});
