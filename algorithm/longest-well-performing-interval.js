/**
 * @param {number[]} hours
 * @return {number}
 */
 var longestWPI = function(hours) {
    // cnt用于标记大于8小时与不大于8小时天数之差，max用于保存当前“表现良好的时间段”
    let cnt = 0, max = 0
    // ind用于存放第一次出现cnt的值的位置，sum用于存放第一次出现cnt时的前缀和
    // 假设初始时cnt为0，位置为-1，前缀和为0
    const ind = new Map([[0, -1]]), sum = new Map([[0, 0]])
    for (let i = 0; i < hours.length; i++) {
        // 大于8小时，cnt++，否则cnt--
        hours[i] > 8 ? cnt++ : cnt--
        // 如果前面没有出现过cnt
        if(!ind.has(cnt)) {
            // 将cnt第一次出现的位置记录到ind
            // 记录第一次出现的位置，是为了后面出现的cnt+1时能离cnt尽可能远，这样计算的时间段越长
            ind.set(cnt, i)
            // 记录cnt的前缀和
            // cnt+1的前缀和计算是 cnt的前缀和+（cnt+1的位置）-（cnt的位置）
            sum.has(cnt - 1) ? sum.set(cnt, sum.get(cnt - 1) + i - ind.get(cnt - 1)) : sum.set(cnt, 0)
        }
        // 如果cnt-1存在，更新max的值
        // 如果不存在，则说明当前位置没有表现良好的时间段
        if(sum.has(cnt - 1)) max = Math.max(max, sum.get(cnt - 1) + i - ind.get(cnt - 1))
    }
    // 返回最大值
    return max
};