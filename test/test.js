require('should');
var jce = require('../src/jce');

describe('jceReader', function(){

    it('should read out a byte', function(){
        new jce.jceReader(0x01).read().should.equal(0)
    });

})