var Node = function(val, front, next) {
    this.val = val
    this.front = front ? front : null
    this.next = next ? next : null
}

/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.size = k
    this.queueSize = 0
    this.front = this.rear = null
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) return false
    if (!this.queueSize) {
        this.front = this.rear = new Node(value)
    } else {
        const node = new Node(value)
        node.next = this.front
        this.front.front = node
        this.front = node
    }
    this.queueSize++
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) return false
    if (!this.queueSize) {
        this.front = this.rear = new Node(value)
    } else {
        const node = new Node(value)
        node.front = this.rear
        this.rear.next = node
        this.rear = node
    }
    this.queueSize++
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) return false
    if (this.queueSize === 1) {
        this.front = this.rear = null
    } else {
        this.front = this.front.next
    }
    this.queueSize--
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) return false
    if (this.queueSize === 1) {
        this.front = this.rear = null
    } else {
        this.rear = this.rear.front
    }
    this.queueSize--
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) return -1
    return this.front.val
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) return -1
    return this.rear.val
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.queueSize === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.queueSize === this.size
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */