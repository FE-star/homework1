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

	// v0.0.5
	A.tail !== null ? dcate(A.tail, B) : A.tail = B.tail
	return A

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
 * @param {Number} len optional
 * @returns {List}
 */

function sub(L, start, len) {
	/** Fill in here **/

	// 参数判定
	if(!(L instanceof List)) throw new Error("第一个参数应该提供一个List的实例")
	if(!Number.isInteger(start)) throw new Error("第二个参数应该提供一个整数，但是收到 " + start)
	if(!(typeof len === "undefined" || (Number.isInteger(len) && len >= 0))) throw new Error("可选的第三个参数, 应该提供一个非负的整数，但是收到 " + len)

	// 获取链表的长度
	var llen = 0, tL = L;
	while((tL = tL.tail) !== null) llen++
	// console.log(llen) // 这个
	if(Math.abs(start) >= llen) {
		// throw new Error("截取失败，截取起始位置不可用")
		console.warn("截取起始位置不可用")
		return new List()
	}

	// 支持起始位置从末尾计算
	if(start < 0 ) start = llen + start

	// 检测从指定位置截取的指定长度是否在当前链表可用
	if(len > llen - start) {
		throw new Error('超出异常：起始点' + start + '之后，有' + (llen - start).toString() + '个,但是提供了要截取' + len + '个')
	}
	var res = new List(); // 截取后的结果链表
	var _L = L, _res = res;

	if (typeof len === 'undefined') {

		for (let i = 0; _L !== null; i++, _L = _L.tail) { // 遍历完列表为结束条件
			// 起始点之后的链表都应该被截取
			if(i === start) {
				res.head = _L.head
				// 由于链表的特性，只需获取到起始链表索引即可，
				// 这样就把链表的尾部都获取到了，遍历结束
				res.tail = _L.tail
				break;
			}
		}
	} else if (len > 0) {
		let end = start + len
		for (_L = L, i = 0; _L !== null; i++, _L = _L.tail) {

			if(i >= start) {
				if(i === end) {
					_res.head = _L.head
					_res.tail = null
					break;
				} else if(i < end){
					_res.head = _L.head
					_res.tail = new List()
					_res = _res.tail
				}
			}
		}
	} else if (len === 0 ) {
		return res
	}
	return res;
}

/*
function sub(L, start, len) {
	var res = new List(), _L, i;
	var _res = res
	if(typeof len === 'undefined' || len > 0) {
		let end
		if(len > 0) {
			end = start + len-1
		} else {
			end = start + NaN
		}
		for (_L = L, i = 0 ;; i++, _L = _L.tail) {
			if(i >= start) {
				if(Number.isNaN(end)) {
					_res.head = _L.head
					_res.tail = _L.tail
					break;
				}
				if(i > end) {
					break
				} else if(i === end) {
					_res.head = _L.head
					_res.tail = null
					break;
				} else if(i < end){
					_res.head = _L.head
					_res.tail = new List()
					_res = _res.tail
				}
			}
		}
	} else if(len < 0) {
		throw new Error('expect third param is bigger than 0, but found ', len)
	} else if (len === 0 ) {
		return res
	}
	return res;
}
*/