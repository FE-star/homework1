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
  let temp = A;
  while(temp){
    if(temp.tail === null){
      temp.tail = B;
      break;
    }
    temp = temp.tail;
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
 */
function sub(L, start, len) {
	/** Fill in here **/
  let climber = L, count = 0,list = [];
  while (count !== start && climber.tail !== null) {
    climber = climber.tail;
    count ++;
  };
  if (climber.tail === null) throw('sublist doesn\'t exist');
  while (len --) {
    if (climber.tail === null && len > 0) throw('sublist doesn\'t exist');
    list.push(climber.head);
    climber = climber.tail;
  }
  return List.list(list);
}
