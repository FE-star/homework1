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
  function getListLast (list) {
    if (!list.tail) {
      return list
    } else {
      return getListLast(list.tail)
    }
  }
  let lastA = getListLast(A)
  lastA.tail = B
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
  if (!L || (!start && start !== 0) || (!len && len !== 0)) {
    throw new Error('缺少参数')
  }
	function getListByIndex (list, index, from = 0) {
    if (from === index) {
      return list
    } else {
      from ++
      return getListByIndex(list.tail, index, from)
    }
  }
  let startList = getListByIndex(L, start)
  let endList = getListByIndex(startList, (start + len - 1), start)
  endList.tail = null
  return startList
}
