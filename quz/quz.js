var List = require('../js/list.js')

/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
    /** Fill in here **/
    if(!(A instanceof List) || !(B instanceof List)) {
        throw '对象A或对象B不是List类型，亲先定义'
    }

    var obj = A;
    while (obj.tail !== null) {
        obj = obj.tail;
    }
    obj.tail = B;

    return A;
}



/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */

var List = require("../js/list.js");

function sub(L, start, len) {
	/** Fill in here **/
    if( !(L instanceof List)  || isNaN(parseInt(start, 10)) || isNaN(parseInt(len, 10)) ) {
	    throw '参数有问题哦！亲 检查一下'
    }
    // 转为数组
    var arr = getArray(L);

    if(arr.length - 3 < len) {
        throw 'len超过链表长度啦 亲'
    }

    return List.list(arr.slice(start, parseInt(start + len, 10)))

}

/**
 * 需要转换的对象
 * @param data 对象
 * @returns {Array} 返回数组
 */
function getArray(data) {
    var array = [];
    while (data.tail !== null ) {
        array.push(data.head);
        data = data.tail;
    }
    array.push(data.head);
    return array;
}


module.exports.dcate = dcate
module.exports.sub = sub
