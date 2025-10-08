var TimeLimitedCache = function() {
    this.cache = new Map(); // key -> { value, expiration }
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const expiration = now + duration;
    const hasValid = this.cache.has(key) && this.cache.get(key).expiration > now;

    this.cache.set(key, { value, expiration });
    return hasValid;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        if (entry.expiration > now) {
            return entry.value;
        } else {
            this.cache.delete(key); // clean up expired
        }
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;
    for (const [key, { expiration }] of this.cache.entries()) {
        if (expiration > now) {
            count++;
        } else {
            this.cache.delete(key); // clean up expired
        }
    }
    return count;
};
