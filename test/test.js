require('should');
var jce = require('../src/jce');
var jceReader = jce.jceReader;
var jceDecoder = jce.jceDecoder;

describe('jceReader', function(){

    beforeEach(function(){

    });

    it('should read out a byte', function(){
        var reader = new jceReader(0x01);
        var next = reader.read();
        next.should.equal('1');
    });

    it('should read out a 00011C2C3C', function(){

        var reader = new jceReader(0x00011C2C3C);

        reader.read().should.equal('1');
        reader.read().should.equal('1');
        reader.read().should.equal('c');
        reader.read().should.equal('2');
        reader.read().should.equal('c');
        reader.read().should.equal('3');
        reader.read().should.equal('c');
    });

    it('should read out a 1234567', function(){

        var reader = new jceReader(0x1234567);

        reader.read(1).should.equal('1');
        reader.read(2).should.equal('23');
        reader.read(3).should.equal('456');
        reader.read(1).should.equal('7');

    });

    it('should throw error when read null', function(){

        (function(){ new jceReader(null);}).should.throwError();

    });

    it('should throw error when read undefined', function(){

        (function(){ new jceReader(undefined);}).should.throwError();

    });

    it('should throw error when read zero step', function() {

        (function () {
            new jceReader(00).read(0);
        }).should.throwError();
    });

    it('should throw error when read negative step', function() {
        (function () {
            new jceReader(00).read(-1);
        }).should.throwError();
    });

    it('should throw error when read illegal number step', function(){
        (function(){ new jceReader(00).read('c');}).should.throwError();
    });

});

describe('jceDecoder', function() {

    beforeEach(function () {

    });

    it('should be ok when decoder setup', function(){
        var decoder = new jceDecoder(0x00011C2C3C);
        decoder.decode();
    });

});