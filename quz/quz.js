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
    if(!isList(A) || !isList(B)) {
        throw new Error ('对象A或对象B不是List类型，亲先定义')
    }

    var current = A;
    while (current.tail) {
        current = current.tail;
    }
    current.tail = B;

    return A;
}

/**
 * 检测list 方法
 * @param list
 * @returns {boolean}
 */
function isList(list) {
    return list instanceof List
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



function sub(L, start, len) {
	/** Fill in here **/
    if( !isList(L) ) {
	    throw new Error ('参数有问题哦！亲 检查一下')
    }

    var eles = [],
        current = L;

    while(current) {
        eles.push(current.head)
        current = current.tail
    }

    if(start < 0 || len < 0 || eles.length < start + len) {
        throw new Error('start or len must out of range')
    }


    return List.list(eles.slice(start, parseInt(start + len, 10)))

}
