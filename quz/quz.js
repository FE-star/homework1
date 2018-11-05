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
	var p=A
	if(p.head===0){
		p=B
		return B
	}
	while(p.tail){
		p=p.tail
	}
	p.tail=B
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
	var counter=1,
		p=L.tail,
		newList=new List()
	while(counter<start){
		p=p.tail
		counter++
	}
	counter=0
	while(counter<len){
		newList=dcate(newList,List.list([p.head]))
		p=p.tail
		counter++
	}
	return newList
}
