var getNext = function(n) {
    let sum = 0
    while(n) {
        sum += (n % 10) ** 2
        n = Math.floor(n / 10)
    }
    return sum
}

// map
var isHappy = function(n) {
    if (n === 1) return true
    let mapper = new Map()
    let p = getNext(n)
    while(p !== 1) {
        if(!mapper.has(p)) {
            mapper.set(p, p)
            p = getNext(p)
        } else {
            return false
        }
    }
    return true
};

// 快慢指针法
var isHappy = function(n) {
    if(n === 1) return true
    let p = getNext(n)
    let q = getNext(getNext(n))
    while(p !== q && q !== 1) {
        p = getNext(p)
        q = getNext(getNext(q))
    }
    return q === 1
};