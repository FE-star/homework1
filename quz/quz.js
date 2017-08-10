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
    var a = 0;
    var AStr = "A";
    for (var L = A; L !== null; L = L.tail) {
        a++;
    }
    for (var i = 0; i < a; i++) {
        AStr += "['tail']";
	}
	eval(AStr + '= B');
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
	var LList = L.toString().split(' ');
	LList.shift();
	LList.pop();
	var value = LList.splice(start,len);
	value.push(']');
	value.unshift('[');
	return value.join(' ')
}