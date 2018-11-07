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
  let L;
  for (L = A; L.tail !== null; L = L.tail) {}
  L.tail = B;
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
  const temp = deepCopy(L);
  let subObj = null;
  for (let i = temp, ind = 0; i !== null; i = i.tail, ind++) {
    ind === start && (subObj = i);
    ind === start + len - 1 && (i.tail = null);
  }
  return subObj;
}

function deepCopy(list) {
  const temp = new List();
  for (let key in list) {
    if (list[key] && typeof list[key] === 'List') {
      deepCopy(list[key]);
    } else {
      temp[key] = list[key];
    }
  }
  return temp;
}
