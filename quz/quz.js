/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
var List = require('../js/list')
function dcate(A, B) {
	/** Fill in here **/
    var conAB=new List(A.head,A.tail);
    var tmp=conAB;
    for(var i=0;tmp.tail!=null;i++){
        tmp=tmp.tail;
    }
    tmp.tail=new List(B.head,B.tail);
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
	var tmp=L;
    var sub=null;
    var count=0;
    var subList=sub;
    for (var i=0;tmp!=null;i++){
        if(i>=start&&count<=len&&tmp.head){
            if(count==0){
                subList=new List(tmp.head);
                sub=subList;
                count++;
            }else {
                sub.tail=new List(tmp.head);
                count++;
                sub=sub.tail;
            }
        }
        tmp=tmp.tail;
    }
    return subList
};

module.exports.dcate = dcate;
module.exports.sub = sub;
