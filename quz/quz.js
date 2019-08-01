// /**
//  * dcate
//  * A list consisting of elements of A followed by the
//  * elements of B. May modify items of A.
//  * Don't use 'new'
//  * @param {List} A
//  * @param {List} B
//  * @returns {List}
//  */
// function dcate(A, B) {
// 	let flag = A

// 	for (flag = A; flag !== null; flag = flag.tail) {
// 		if (flag.tail === null) {
// 			flag.tail = B
// 			break
// 		}
// 	}

// 	return A;

// }

// /**
//  * sub
//  * The sublist consisting of LEN items from list L,
//  * beginning with item #START (where the first item is #0).
//  * Does not modify the original list elements.
//  * it is an error if the desired items don't exist.
//  * @param {List} L
//  * @param {Number} start
//  * @param {Number} len
//  * @returns {List}
//  * 相当于截取链表的一部分
//  */
// function sub(L, start, len) {
// 	/** Fill in here **/
// 	let LLEN = 0 // 链表索引
// 	let sub = {}
// 	let temp = Object.assign(sub,L)
// 	while(temp !== null){
// 		LLEN++

// 		(LLEN-1)===start? sub=temp:''

// 		if((start+len) === LLEN){
// 			temp.tail = null
// 			break
// 		}else{
// 			(start+len-1) === LLEN
// 		}
// 		temp = temp.tail
// 	}

// 	if(start >LLEN){
// 		return new Error(`start big than L's length;`)
// 	}
// 	return sub
// }

// module.exports = {
// 	dcate: dcate,
// 	sub: sub
// }

define(function () {
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
		let flag = A

		for (flag = A; flag !== null; flag = flag.tail) {
			if (flag.tail === null) {
				flag.tail = B
				break
			}
		}

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
	 * 相当于截取链表的一部分
	 */
	function sub(L, start, len) {
		/** Fill in here **/
		let LLEN = 0 // 链表索引
		let sub = {}
		let temp = Object.assign(sub, L)
		while (temp !== null) {
			LLEN++

			(LLEN - 1) === start ? sub = temp : ''

			if ((start + len) === LLEN) {
				temp.tail = null
				break
			} else {
				(start + len - 1) === LLEN
			}
			temp = temp.tail
		}

		if (start > LLEN) {
			return new Error(`start big than L's length;`)
		}
		return sub
	}

	return {
		dcate: dcate,
		sub: sub
	}
});