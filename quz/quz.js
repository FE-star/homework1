function isEmpty(obj) {
    return obj === null || obj === undefined || obj === '';
}

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
    if (isEmpty(A)) {
        throw 'A不能为空';
    }

    if (isEmpty(B)) {
        throw 'B不能为空';
    }

    // 查找A的最深层
    var tmpA = A;
    while (tmpA.tail != null) {
        tmpA = tmpA.tail;
    }

    // 追加B
    tmpA.tail = B;

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
function sub(L, start, len) {
    if (isEmpty(L)) {
        throw '要截取的List不能为空';
    }

    if (isEmpty(start)) {
        start = 0;
    }

    if (isEmpty(len)) {
        len = -1;
    }

    var newArr = [];
    var temp = { tail: L };
    var index = -1;

    do {
        index += 1;
        temp = temp.tail;

        // 跳过start之前的item
        if (index < start) {
            continue;
        }

        // len越界 or 达到指定个数
        if (isEmpty(temp) || (len != -1 && newArr.length == len)) {
            break;
        }

        newArr.push(temp.head);
    } while (temp != null)

    return List.list(newArr);
}