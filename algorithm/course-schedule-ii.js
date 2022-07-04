/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    const indegreeArr = new Array(numCourses).fill(0)
    const postCourses = []
    for(const item of prerequisites) {
        postCourses[item[1]] ? postCourses[item[1]].push(item[0]) : postCourses[item[1]] = [item[0]]
        indegreeArr[item[0]]++
    }
    const ret = []
    for(let i = 0; i < indegreeArr.length; i++) {
        indegreeArr[i] === 0 && ret.push(i)
    }
    let i = 0
    while(i < ret.length) {
        if(postCourses[ret[i]]) {
            for(let j = 0; j < postCourses[ret[i]].length; j++) {
                --indegreeArr[postCourses[ret[i]][j]] === 0 && ret.push(postCourses[ret[i]][j])
            }
        }
        i++
    }
    if(ret.length === numCourses) return ret
    return []
};