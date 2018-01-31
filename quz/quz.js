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
    if (A.constructor !== List || B.constructor !== List) {
        /* istanbul ignore next */
        throw new Error('传入的参数不是List类型')
    }
    for (var temp = A; temp !== null; temp = temp.tail) {
        if (temp.tail === null) {
            temp.tail = B;
            break;
        }
    }
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
    if (L.constructor !== List) {
        /* istanbul ignore next */
        throw new Error('传入的第一个参数不是List类型')
    }
    if (isNaN(start) || isNaN(len)) {
        /* istanbul ignore next */
        throw new Error('传入的第二个或第三个参数不是Number类型')
    }

    var tempArr = []
    var T = L
    var end = start + len
    for (var i = 0; T !== null; T = T.tail, i++) {
        if (i > start - 1 && i < end) {
            tempArr.push(T.head)
        }
    }
    return List.list(tempArr)
}

function subList(L, start, stop) {
    if (L.constructor !== List) {
        /* istanbul ignore next */
        throw new Error('传入的第一个参数不是List类型')
    }
    if (isNaN(start) || isNaN(stop)) {
        /* istanbul ignore next */
        throw new Error('传入的第二个或第三个参数不是Number类型')
    }

    var tempArr = []
    var T=L
    var end=start+stop-1
     for (var i=0; T!== null; T=T.tail,i++) {
        if(i<start || i>end){
          tempArr.push(T.head)
        }
    }
    return List.list(tempArr)
}
