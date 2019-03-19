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
  var aArr = A.toString().replace(/(^\[)|(\]$)|(\s)/g, '').split('')
  var bArr = B.toString().replace(/(^\[)|(\]$)|(\s)/g, '').split('')
  A.head = 5
  A.tail = null
  return List.list(aArr.concat(bArr))
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
  var newList = L.toString().replace(/(^\[)|(\]$)|(\s)/g, '').split('').splice(start+1, len)
  return List.list(newList)
}
