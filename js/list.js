/**
 * List - 链表
 * @author donaldyang
 */

function List (head, tail) {
  this.head = head || 0
  this.tail = tail || null
}

// Returns a new List containing the array.
// 将数组转换成链表
List.list = function (array) {
  var sentinel = new List()
  var len = array.length
  var p
  var i

  p = sentinel
  for (i = 0; i < len; i++) {
    p.tail = new List(array[i])
    p = p.tail
  }
  return sentinel.tail
}

// Returns a readable String for THIS.
// 重写 prototype 上的 toString 方法
// 遍历链表,输出[value1,value2...]
List.prototype.toString = function () {
  var res = ''
  var L
  res += '['
  for (L = this; L !== null; L = L.tail) {
    res = res + ' ' + L.head
  }
  res += ' ]'
  return res
}

module.exports = List
