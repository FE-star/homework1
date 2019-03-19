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
  /** 看了半天才想明白原来是要把 B(List) 合并到 A(List)后面, 并且A(List) 被修改，不是返回新 实例 **/
  // 找出 最后一个  tail === nul 的元素
  let lastTail = A
  while (lastTail.tail) {
    lastTail = lastTail.tail
  }
  // A 和 B 都是 List 实例,  把 B 合并到 A 后续元素中
  lastTail.tail = {...B}
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
  // 对 L(List) 进行裁剪  返回新 List 实例 循环太麻烦了 字符串操作
  var newList = L.toString().replace(/(^\[)|(\]$)|(\s)/g, '').split('').splice(start+1, len)
  return List.list(newList)
}
