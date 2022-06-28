/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0)
    const nextCourses = []
    const topology = []
    let ans = 0
    for(const x of prerequisites) {
        indegree[x[0]]++
        nextCourses[x[1]] ? nextCourses[x[1]].push(x[0]) : nextCourses[x[1]] = [x[0]]
    }
    for(let i = 0; i < numCourses; i++) {
        indegree[i] === 0 && topology.push(i)
    }
    while(topology.length) {
        const course = topology.shift()
        ans++
        if(!nextCourses[course]) continue
        for(let i = 0; i < nextCourses[course].length; i++) {
            --indegree[nextCourses[course][i]] === 0 && topology.push(nextCourses[course][i])
        }
    }
    return ans === numCourses
};