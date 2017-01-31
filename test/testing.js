var Name = require('../index.js');
var expect = require('chai').expect;

describe('firstTest', function () {
    it('It should return your name', function() {
        var name = new Name();
        var result = name.sayName();
        expect(result).to.equal('Your name');
    })

})