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
  if (A.tail) {
    let obj = A.tail
    dcate(obj, B)
  } else {
    A.tail = B
  }
  return A
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
  let obj = { ...L };
  let obj1 = {}
  for (let i = 0; i < (start); i++) {
    if (obj.tail) {
      obj = obj.tail
    } else {
      return false
    }
  }
  obj1 = obj
  obj1 = re(obj1, 2, 1)
  return obj1
}

function re(param, len, start) {
  let obj = param
  let num = len
  let s = start
  if (start < len) {
    s = s + 1
    obj.tail = re(obj.tail, len, s)
  } else {
    obj.tail = null
  }
  return obj
}

