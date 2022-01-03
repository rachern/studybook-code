var Node = function(val, next) {
    this.val = val ? val : 0
    this.next = next ? next : null
}

var MyLinkedList = function() {
    this.head = null
    this.tail = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let p = this.head
    while (index-- && p) {
        p = p.next 
    }
    return p ? p.val : -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newHead = new Node(val, this.head)
    if (this.tail) {
        this.head = newHead
    } else {
        this.head = this.tail = newHead
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val)
    if (this.tail) {
        this.tail.next = newNode
        this.tail = newNode
    } else {
        this.head  = this.tail = newNode
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    const vHead = new Node(-1, this.head)
    let p = vHead, i = index
    while (index-- && p) {
        p = p.next
    }
    if (!p) return
    const newNode = new Node(val, p.next)
    p.next = newNode
    if (i === 0) {
        if (this.tail) {
            this.head = newNode
        } else {
            this.tail = this.head = newNode
        }
    } 
    if (!newNode.next) this.tail = newNode
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    const vHead = new Node(-1, this.head)
    let p = vHead, i = index
    while (index-- && p.next) {
        p = p.next
    }
    if (!p.next) return
    p.next = p.next.next
    if (!p.next) this.tail = p
    if (i === 0) this.head = vHead.next
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */