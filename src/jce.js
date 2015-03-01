/**
 * Created by magic on 2014/12/13.
 */
"use strict";

var jceReader = require('./jceReader');
var jceTypes = require('./jceType')

var jceDecoder = (function(reader){

    reader = (reader == null) ? jceReader : reader;

    var _decoder = function(input){
        this.rawInput = input;
        this.reader = new reader(this.rawInput);
    };

    _decoder.prototype.decode = function(){
        var type = this.reader.read();
        while(type != -1) {
            console.log('jce type is', jceTypes[type]);
            type = this.reader.read();
        }
    }

    return _decoder;

})(null);

//export

exports.jceTypes = jceTypes;
exports.jceReader = jceReader;
exports.jceDecoder = jceDecoder;

var isDebug = false;
exports.debug = function(){
    isDebug = true;
};