'use strict';
/**
 * Created with JetBrains WebStorm.
 * User: dev
 * Date: 15-2-20
 * Time: 下午1:34
 * To change this template use File | Settings | File Templates.
 */
(function(){

    var _type = {
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
    };

    var root = this,
        previous_jceType = root['jceType'];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = _type;
    }
    else {
        root.jceType = _type;
    }

    jceType.noConflict = function () {
        root.jceType = previous_jceType;
        return jceType;
    };
})();