/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
 var exclusiveTime = function(n, logs) {
    // 定义log栈用于存放未完成的程序编号，res用于存放结果
    const logStack = [], res = []
    // 定义prev用于记录上个log的时间戳，state记录上个log的状态
    let prev = 0, state = ''
    for (let i = 0; i < logs.length; i++) {
        const arr = logs[i].split(':')
        // 如果结果数组中不存在该程序编号，将对应的位置赋值为0，方便后续计算
        if (!res[arr[0]]) res[arr[0]] = 0
        if (arr[1] === 'start') {
            // 如果不是第一个程序，需要将当前时间戳与上个时间戳之差加到log栈顶的程序上
            if (logStack.length) {
                // 这里的情况画图即可一目了然
                res[logStack[logStack.length - 1]] += state === 'start' ? arr[2] - prev : arr[2] - prev - 1
            }
            // 记录当前任务的时间戳
            prev = arr[2]
            // 将当前任务压入栈中
            logStack.push(arr[0])
            // 记录当前的状态
            state = 'start'
        }
        if (arr[1] === 'end') {
            // 这里的情况画图即可一目了然
            res[logStack[logStack.length - 1]] += state === 'start' ? arr[2] - prev + 1 : arr[2] - prev
            // 记录当前任务的时间戳
            prev = arr[2]
            // 当前任务已执行完成，从栈顶弹出
            logStack.pop()
            // 记录当前的状态
            state = 'end'
        }
    }
    return res
};