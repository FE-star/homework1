/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
var List=require('../js/List');
function dcate(A, B) {
	/** Fill in here **/
	var arrayA=A.toString();
	arrayA=arrayA.split(' ');
	var arrayB=B.toString();
	arrayB=arrayB.split(' ');
	arrayA.shift();
	arrayA.pop();
	arrayB.shift();
	arrayB.pop();
	for(var i=0;i<arrayB.length;i++){
		arrayA.push(arrayB[i]);
	}
	A.head=List.list(arrayA).head;
	A.tail=List.list(arrayA).tail;
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
	var arrayL=L.toString();
	arrayL=arrayL.split(' ');
	arrayL.shift();
	arrayL.pop();
	var result=[];
	for(var i=0;i<len;i++){
		result.push(+arrayL[start++]);
	}
	return List.list(result);
};
var Quz={
	"dcate":dcate,
	"sub":sub
};
module.exports=Quz;
