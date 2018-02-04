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

    if (typeof A !== "object" || A.constructor !== List || typeof B !== "object" || B.constructor !== List) {
        return List.list([]);
    }
    let tmp = A;
    while (tmp.tail) {
        tmp = tmp.tail;
    }
    tmp.tail = B;
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
    /** Fill in here **/
    // 边界条件
    if (typeof L !== "object" || L.constructor !== List) {
        return List.list([]);
    }
    if (typeof start !== "number" || +start < 0) {
        start = 0;
    }
    if (typeof len !== "number" || len < 0 || len == 0) {
        return List.list([]);
    }
    let rel = [],
        tmp = L,
        i = 0,
        end = start + len;
    // 获得 start 开始往后 len 范围的 head 值并 push 进 rel 数组
    while (tmp) {
        if (i++ >= start && i <= end) {
            rel.push(tmp.head)
        } else if (i > end) {
            // 如果 i 大于 end 值了，While 循环还没结束的话，就直接跳出 while 循环
            break;
        }
        // 循环遍历链表到达 start 处，end 前如果已到达链表最后则结束 while 循环
        tmp = tmp.tail;
    }
    return List.list(rel);
}
