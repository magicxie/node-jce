/**
 * Created by magic on 2014/12/13.
 */
"use strict";

var jceTyps = (function(){
    return {
        0 : 'Char',
        1 : 'Short',
        2 : 'Int32',
        3 : 'Int64',
        4 : 'Float',
        5 : 'Double',
        6 : 'String1',
        7 : 'String4',
        8 : 'Map',
        9 : 'List',
        10 : 'StructBegin',
        11 : 'StructEnd',
        12 : 'ZeroTag',
        13 : 'SimpleList',
        14 : '/',
        15 : '/'
    }
})();

var jceReader = (function() {

    /**
     *
     * @param input must be string, for not truncating leading zeros.
     * @private
     */
    var _reader = function(input){

        if(input == null || input == undefined){
            throw new Error('input can not be null!');
        }

        var system = 16;

        if(arguments.length == 2){

        }

        console.log('input is', input, 'and hex is', input.toString(16),'\n');

        this.input = input.toString(16);
        this.indicator = 0;

    };

    _reader.prototype.readStringHex = function(hex){
        var arr = [];
        for(var c in hex){
            arr.push(c);
        }
        return arr.join(c);
    }

    _reader.prototype.readStringOct = function(oct){

    }
    _reader.prototype.readStringBinary = function(binary){

    }
    _reader.prototype.readBytes = function(bytes){

    }

    _reader.prototype.checkStep = function(steps){
        if(isNaN(steps)){
            throw new Error('steps must be a number!');
        }
        if(steps < 1){
           throw new Error('steps must larger than 0!');
       }
    }

    _reader.prototype.moveIndicator = function(steps){
        this.indicator += steps;
    }

    _reader.prototype.read = function(){

       //read n length arguments
       var steps = 1;
       if(arguments.length == 1){
           steps = arguments[0];
       }

       this.checkStep(steps);

       if(this.indicator == this.input.length){
           return -1;
       }else {
           var result = this.input.substr(this.indicator,steps);
           this.moveIndicator(steps);
           return result;
       }
    }

    return _reader;

})();

var jceDecoder = (function(reader){

    reader = (reader == null) ? jceReader : reader;

    var _decoder = function(input){
        this.rawInput = input;
        this.reader = new reader(this.rawInput);
    };

    _decoder.prototype.decode = function(){
        var type = this.reader.read();
        while(type != -1) {
            console.log('jce type is', jceTyps[type]);
            type = this.reader.read();
        }
    }

    return _decoder;

})();

//export

exports.jceTyps = jceTyps;
exports.jceReader = jceReader;
exports.jceDecoder = jceDecoder;

var isDebug = false;
exports.debug = function(){
    isDebug = true;
};