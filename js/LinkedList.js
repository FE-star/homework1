/**
 * @function Node
 */
function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
}

//链表类
function LList() {
    this.head = new Node('head');     //头节点
    this.find = find;                   //查找节点
    this.insert = insert;               //插入节点
    this.remove = remove;               //删除节点
    this.findPrev = findPrev;           //查找前一个节点
    this.display = display;             //显示链表
}

function find(target) {
    let currNode = this.head;
    while (currNode.element !== target) {
        currNode = currNode.next;
    }
    return currNode
}

// 插入新节点
function insert(newEle, target) {
    var newNode = new Node(newEle);
    var currNode = this.find(target);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

// 显示链表元素
function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element)
        currNode = currNode.next;
    }
}


// 查找节点的前一个节点

function findPrev(target) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element !== target)) {
        currNode = currNode.next;
    }
    return currNode;
}

// 删除一个节点
function remove(target) {
    let prevNode = this.findPrev(target);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}



// var fruits = new LList();


// fruits.insert('Apple', 'head');
// fruits.insert('Banana', 'Apple');
// fruits.insert('Pear', 'Banana');
// console.log(fruits);
// console.log(fruits.display()); 