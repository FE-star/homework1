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
	let current = A;
	while (current.tail != null) {
		current = current.tail;
	}
	current.tail = B;
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
	let current = new List();
	return L.find(start)
          .toString()
          .replace(/[\[\]]/g, "")
          .trim()
          .split(" ")
          .slice(0, len)
          .reduce(
            (result, curr, idx, array) => {
              current = current.tail = new List(curr);
              return result;
            }, 
            current
          )
          .tail;
	
}

function sub(L, start, len) {
  let result = new List();
  function recursion(A, B, surplus) {
    if (!surplus) return null;
    A.tail = new List(B.head);
    recursion(A.tail, B.tail, surplus - 1);
    return A.tail;
  }

  let current = L.find(start);
  return recursion(result, current, len);
}

function sub(L, start, len) {
  let surplus = len;
  let pointer = L.find(start);
  let result, current;
  current = result = new List();

  while (surplus) {
    current.tail = new List(pointer.head);
    current = current.tail;
    pointer = pointer.tail;
    -- surplus;
  }

  return result.tail;
}