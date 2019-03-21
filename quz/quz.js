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
	//将A的内存地址赋给变量C。（目的：操作新变量C而使变量A所指内存地址不变，得以保存原始的内存地址。）
	let C = A;

	//循环C变量，直到tail值为null。（每次循环都会给C重新赋值地址，理解对否？）
 	while (C.tail) {
 		C = C.tail;
 	}
 	
 	//此时C变量的内存地址改变，C变量所指的内存地址变为最后的C.tail（即null）；
 	//将B内存地址赋给C.tail，取代null。（目的：使B的内存地址取代了C中最后的null内存地址。亦，将B内存地址取代A最后的null内存地址，并链接到A内存地址上。）
 	C.tail = B;
 	
 	//由于A的内存地址不变，且B内存地址取代了A中的null内存地址，故A，B得以连接。
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
	//找到L中start的位置
	for(let i = 0; i < start; i++) {
		L = L.tail;
	}

	//在内存中新建List，地址先指向result，后指向getHead；
	let getHead = result = new List();
	for (let i = 0; i < len; i++) {
		getHead.tail = new List(L.head);

		//以下两段代码，将L和getHead一直循环到最后的null，以便上一段代码不断的将L.head赋值（内存地址链接）给getHead.tail；
		//其中L.head是第一个循环中得到的start位置的初始值，第二个循环将剩下的值start起至len个的内存地址链接到new List()内存；
		L = L.tail;
		getHead = getHead.tail;
	}
	//result始终指向new List()的内存地址，故返回result.tail
	return result.tail;
}
