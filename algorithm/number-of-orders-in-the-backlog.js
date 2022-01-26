/**
 * @param {number[][]} orders
 * @return {number}
 */
 var getNumberOfBacklogOrders = function(orders) {
    const buy = new Heap(1)
    const sell = new Heap(-1)
    let total = 0
    for (let [price, amount, orderType] of orders) {
        if (orderType === 0) { // 买
            while (sell.size() && sell.top().price <= price && amount > 0) {
                const head = sell.pop()
                if (amount < head.amount) {
                    sell.push({price: head.price, amount: head.amount - amount})
                    total -= amount
                    amount = 0
                } else {
                    amount -= head.amount
                    total -= head.amount
                }
            }
            if (amount > 0) {
                buy.push({price, amount})
                total += amount
            }
        } else {
            while (buy.size() && buy.top().price >= price && amount > 0) {
                const head = buy.pop()
                if (amount < head.amount) {
                    buy.push({price: head.price, amount: head.amount - amount})
                    total -= amount
                    amount = 0
                } else {
                    amount -= head.amount
                    total -= head.amount
                }
            }
            if (amount > 0) {
                sell.push({price, amount})
                total += amount
            }
        }
    }
    return total % (Math.pow(10, 9) + 7)
};

class Heap {
    constructor(type) {
        this.arr = []
        // 根据 type 的值判断生成大顶堆还是生成小顶堆：-1 小顶堆  1 大顶堆
        this.type = type
    }

    // 返回堆的大小
    size() {
        return this.arr.length
    }

    // 返回堆顶元素
    top() {
        return this.arr[0]
    }

    // 往堆中插入元素
    push(val) {
        this.arr.push(val)
        this._sortBack()
    }

    // 弹出堆顶元素
    pop() {
        const val = this.arr[0]
        const back = this.arr.pop()
        if (this.size()) {
            this.arr[0] = back
            this._sortFront()
        }
        return val
    }

    // 向上调整堆结构
    _sortBack() {
        let i = this.size() - 1
        if (this.type === -1) {
            while (i > 0 && this.arr[i].price < this.arr[Math.floor((i - 1) / 2)].price) {
                [this.arr[i], this.arr[Math.floor((i - 1) / 2)]] = [this.arr[Math.floor((i - 1) / 2)], this.arr[i]]
                i = Math.floor((i - 1) / 2)
            }
        } else {
            while (i > 0 && this.arr[i].price > this.arr[Math.floor((i - 1) / 2)].price) {
                [this.arr[i], this.arr[Math.floor((i - 1) / 2)]] = [this.arr[Math.floor((i - 1) / 2)], this.arr[i]]
                i = Math.floor((i - 1) / 2)
            }
        }
    }

    // 向下调整堆结构
    _sortFront() {
        let i = 0
        if (this.type === -1) {
            while (i * 2 + 1 < this.size()) {
                let temp = i
                if (this.arr[temp].price > this.arr[i * 2 + 1].price) temp = i * 2 + 1
                if (i * 2 + 2 < this.size() && this.arr[temp].price > this.arr[i * 2 + 2].price) temp = i * 2 + 2
                if (temp === i) break
                [this.arr[temp], this.arr[i]] = [this.arr[i], this.arr[temp]]
                i = temp
            }
        } else {
            while (i * 2 + 1 < this.size()) {
                let temp = i
                if (this.arr[temp].price < this.arr[i * 2 + 1].price) temp = i * 2 + 1
                if (i * 2 + 2 < this.size() && this.arr[temp].price < this.arr[i * 2 + 2].price) temp = i * 2 + 2
                if (temp === i) break
                [this.arr[temp], this.arr[i]] = [this.arr[i], this.arr[temp]]
                i = temp
            }
        }
    }
}