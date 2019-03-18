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
    let child = A.tail;
    while (child !== null) {
        if (child.tail === null) {
            break
        }
        child = child.tail
    }
    child.tail = B
    return A
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
    function deepCopy(obj) {
        let result = Array.isArray(obj) ? [] : {};
        result.__proto__ = obj.__proto__
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    result[key] = deepCopy(obj[key]);
                } else {
                    result[key] = obj[key];
                }
            }
        }
        return result;
    }

    let obj, child = L;
    for (let i = 0; i < start; i++) {
        if (!child) {
            throw Error('items don\'t exist')
        }
        child = child.tail
    }
    obj = deepCopy(child)
    let child2 = obj
    for (let i = 0; i < len; i++) {
        if (!child2) {
            throw Error('items don\'t exist')
        }
        child2 = child.tail
    }
    if (child2 && child2.tail) {
        child2.tail = null
    }
    return obj
}