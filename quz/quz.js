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

  let tempObj = A;
  while(tempObj.tail !== null) {
    tempObj = tempObj.tail;
  }
  tempObj.tail = B;

  return A.toString();
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
  let arr = L.toString().replace('[ ', '').replace(' ]', '').split(' ');
  let tempArr = [];
  arr.forEach((item, index) => {
    if(index >= start && index <= start + len - 1) {
      tempArr.push(item);
    }
  })

  return List.list(tempArr);
}
