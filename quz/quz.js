// import List from '../js/list'
/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
/**
 * List
 * @author donaldyang
 */

function List(head, tail) {
	this.head = head || 0;
	this.tail = tail || null;
}

// Returns a new List containing the array.
List.list = function (array) {
	var sentinel = new List(),
		len = array.length,
		p, i;

	p = sentinel;
	for (i = 0; i < len; i++) {
		p.tail = new List(array[i]);
		p = p.tail;
	}
	return sentinel.tail;
}

// Returns a readable String for THIS.
List.prototype.toString = function () {
	var res = '', L;
	res += '[';
	for (L = this; L !== null; L = L.tail) {
		res = res + ' ' + L.head;
	}
	res += ' ]';
	return res;
};
function dcate(A, B) {
	var L
	for (L = A; L !== null; L = L.tail) {
		if (L.head===8){
			L.tail=B
			break
		}
	}
	return A
	/** Fill in here **/
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
	var a=[]
	var p,count1=-1,q,count2=0;
	for (p = L; p !== null; p = p.tail) {
		count1++
		if(count1===start){
			// console.log(p);
			for(q=p;q!=null;q=q.tail){
				count2++
				if(count2<=len) {
					a.push(q.head)
				}
			}
			break;
		}
	}
	return List.list(a)
	/** Fill in here **/
}
