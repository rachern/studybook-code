/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    let five = ten = 0
    for (let i = 0; i < bills.length; i++) {
        switch(bills[i]) {
            case 5:
                five++
                break;
            case 10:
                if (!five) return false
                ten++
                five--
                break
            case 20:
                if (!five || (five < 3 && !ten)) return false
                if (ten) {
                    ten--
                    five--
                } else {
                    five -= 3
                }
                break
        }
    }
    return true
};