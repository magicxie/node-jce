'use strict';

/**
 * Created with JetBrains WebStorm.
 * User: dev
 * Date: 15-2-20
 * Time: 下午1:33
 * To change this template use File | Settings | File Templates.
 */

(function() {

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

        console.log('input is', input, 'and hex is', input.toString(system),'\n');

        this.input = input.toString(system);
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

    var root = this,
        previous_jceReader = root['jceReader'];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = _reader;
    }
    else {
        root.jceReader = _reader;
    }

    jceReader.noConflict = function () {
        root.jceReader = previous_jceReader;
        return jceReader;
    };

})();