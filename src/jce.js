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

    var _reader = function(input){

        if(input == null){
            throw new Error('input can not be null!');
        }

        console.info('input is', input, 'and hex is', input.toString(16));

        this.input = input.toString(16);
        this.indicator = -1;

    };

    _reader.prototype.read = function(){
       //TODO read n length arguments
       if(this.indicator == this.input.length){
           return -1;
       }else {
           return this.input.charAt(this.indicator++);
       }
    }

    return _reader;

})();

var jceDecoder = (function(reader){

    var result = {};

    var decodeType = function(reader){
        var type = reader.read();
        eval(jceTyps[type]);
    }

    return function(input){
        result = decodeType(reader(input));
    }

})(jceReader);

//export

exports.jceTyps = jceTyps;
exports.jceReader = jceReader;
exports.jceDecoder = jceDecoder;

var isDebug = false;
exports.debug = function(){
    isDebug = ture;
};