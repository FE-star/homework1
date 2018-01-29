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
  if( !(A instanceof List) || !(B instanceof List) ) throw new Error("arguments is instanceof List!");

  var temp = A;
  while( temp.tail !== null ) {
    temp = temp.tail;
  }
  temp.tail = B;
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
  if( !(L instanceof List) ) throw new Error(L + " isn't instanceof List!");
  if( start < 0 || len < 1 ) throw new Error("arguments is illegal!");

  var temp = L,
      res = [],
      i = 0;
  while( temp !== null && i < start + len ) {
    if( i >= start ) {
      res.push(temp.head);
    }
    temp = temp.tail;
    i++;
  }

  if( i != start + len) throw new Error("the desired items don't exist!");

  return List.list(res);
}
