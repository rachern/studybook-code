var FrontMiddleBackQueue = function() {
    this.frontArr = []
    this.rearArr = []
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.frontArr.unshift(val)
    this.sort()
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    if (this.frontArr.length === this.rearArr.length) {
        this.rearArr.unshift(val)
    } else {
        this.frontArr.push(val)
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.rearArr.push(val)
    this.sort()
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    if (this.isEmpty()) return -1
    let val
    if (!this.frontArr.length) {
        val = this.rearArr.shift()
    } else {
        val = this.frontArr.shift()
    }
    this.sort()
    return val
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if (this.isEmpty()) return -1
    if (this.frontArr.length === this.rearArr.length) {
        return this.frontArr.pop()
    } else {
        return this.rearArr.shift()
    }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    if (this.isEmpty()) return -1
    const val = this.rearArr.pop()
    this.sort()
    return val
};

FrontMiddleBackQueue.prototype.isEmpty = function() {
    return !this.frontArr.length && !this.rearArr.length
}

FrontMiddleBackQueue.prototype.sort = function() {
    if (this.frontArr.length > this.rearArr.length) {
        this.rearArr.unshift(this.frontArr.pop())
    } else if (this.rearArr.length - this.frontArr.length > 1) {
        this.frontArr.push(this.rearArr.shift())
    }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */