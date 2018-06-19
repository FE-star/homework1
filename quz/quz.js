// var List = require('../js/list.js')
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





	// v0.0.4
	/*
		function dcate(A, B) {
			let tail = A
			if(tail.tail !== null) {
				dcate(tail.tail, B)
				return tail
			} else {
				tail.tail = B
				return tail
			}
		}
	*/

	// v0.0.3
  /*
	  function dcate(A, B) {
			function eachList(listA, listB){
				let tail = listA
				if(tail.tail !== null) {
					eachList(tail.tail, listB)
					return tail
				} else {
					tail.tail = listB
					return tail
				}
			}
			return eachList(A, B);
	*/



	// v0.0.2
	/*
	function dcate(A, B) {

		console.log(A.toString(),B.toString())

		var i = 0
		function eachList(list){
			let tail = list;
			let temp = new List();
			if(tail.tail !== null) {

				console.log('=====遍历'+ i +'====',tail.head)
				console.log('=====剩余list==='+ i++ +'====',tail.toString())
				temp.head = tail.head
				console.log('========存遍历项============',tail.head, temp.toString())
				tail = tail.tail
				temp.tail = eachList(tail)
				console.log('=====temp====',temp.toString())

				return temp
			} else {
				console.log('=====tail'+ i +'====')
				// console.log(temp.head, tail.head)
				temp.head = tail.head
				temp.tail = B;
				console.log('=====temp'+ i +'====',temp.toString())

				return temp
			}
		}

		return eachList(A);
	}
	*/

	// v0.0.1
	// function dcate(A, B) {
	// 		A.tail = B
	// }
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
	var res = new List(), _L;
	res += '[';
	for (_L = L; typeof _L !== 'undefined'; _L = _L.tail) {

		res = res + ' ' + L.head;
	}
	res += ' ]';
	return res;
}