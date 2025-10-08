
// /**
//  * @param {Function} fn
//  * @param {number} t - timeout in milliseconds
//  * @return {Function}
//  */
// var timeLimit = function(fn, t) {
//     return async function(...args) {
//         return Promise.race([
//             fn(...args),
//             new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t))
//         ]);
//     };
// };

/**
 * @param {Function} fn
 * @param {number} t - timeout in milliseconds
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return Promise.race([
            fn(...args),
            new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t))
        ]);
    };
};
