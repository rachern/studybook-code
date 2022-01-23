var Twitter = function() {
    this.tweets = []
    this.users = {}
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.tweets.unshift([userId, tweetId])
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if (!this.users[userId]) this.users[userId] = new Set([userId])
    return this.tweets.filter(v => this.users[userId].has(v[0])).map(v => v[1]).slice(0, 10)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.users[followerId]) this.users[followerId] = new Set([followerId])
    this.users[followerId].add(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (!this.users[followerId]) this.users[followerId] = new Set([followerId])
    this.users[followerId].delete(followeeId)
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */



// 解法二

var Twitter = function() {
    this.userMap = new Map()
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.userMap.has(userId)) this.userMap.set(userId, new User(userId))
    let u = this.userMap.get(userId)
    u.post(tweetId)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if (!this.userMap.has(userId)) return []
    const u = this.userMap.get(userId)
    let tweets = []
    for (const follow of u.followed) {
        tweets = tweets.concat(this.userMap.get(follow).tweets)
    }
    return tweets.sort((a,b) => b.time - a.time).map(v => v.tweetId).slice(0, 10)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.userMap.has(followerId)) this.userMap.set(followerId, new User(followerId))
    if (!this.userMap.has(followeeId)) this.userMap.set(followeeId, new User(followeeId))
    const u = this.userMap.get(followerId)
    u.follow(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (!this.userMap.has(followerId)) this.userMap.set(followerId, new User(followerId))
    const u = this.userMap.get(followerId)
    u.unFollow(followeeId)
};

class User {
    constructor(userId) {
        this.userId = userId
        this.followed = new Set()
        this.tweets = []
        this.follow(userId)
    }

    follow(userId) {
        this.followed.add(userId)
    }

    unFollow(userId) {
        this.followed.delete(userId)
    }

    post(tweetId) {
        const tweet = new Tweet(tweetId)
        this.tweets.push(tweet)
    }
}

class Tweet {
    static num = 0

    constructor(tweetId) {
        this.tweetId = tweetId
        this.time = Tweet.num++
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */