
// /**
//  * @param {Function} fn
//  * @param {number} t milliseconds
//  * @return {Function}
//  */
// var debounce = function(fn, t) {
//     let timerId;

//     return function(...args) {
//         // Clear any previous timer
//         clearTimeout(timerId);
        
//         // Start a new timer
//         timerId = setTimeout(() => {
//             fn(...args);
//         }, t);
//     };
// };

// /**
//  * const log = debounce(console.log, 100);
//  * log('Hello'); // cancelled
//  * log('Hello'); // cancelled
//  * log('Hello'); // Logged at t=100ms
//  */

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timerId;

    return function(...args) {
        // Clear any previous timer
        clearTimeout(timerId);
        
        // Start a new timer
        timerId = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */