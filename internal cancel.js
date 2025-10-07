// /**
//  * @param {Function} fn
//  * @param {Array} args
//  * @param {number} t - interval in ms
//  * @return {Function} cancel function
//  */
// var cancellable = function(fn, args, t) {
//     // Call once immediately at time 0
//     fn(...args);

//     // Set up interval to repeat every t ms
//     const intervalId = setInterval(() => {
//         fn(...args);
//     }, t);

//     // Return cancel function
//     return function cancel() {
//         clearInterval(intervalId);
//     };
// };
// /**
//  *  const result = [];
//  *
//  *  const fn = (x) => x * 2;
//  *  const args = [4], t = 35, cancelTimeMs = 190;
//  *
//  *  const start = performance.now();
//  *
//  *  const log = (...argsArr) => {
//  *      const diff = Math.floor(performance.now() - start);
//  *      result.push({"time": diff, "returned": fn(...argsArr)});
//  *  }
//  *       
//  *  const cancel = cancellable(log, args, t);
//  *
//  *  setTimeout(cancel, cancelTimeMs);
//  *   
//  *  setTimeout(() => {
//  *      console.log(result); // [
//  *                           //     {"time":0,"returned":8},
//  *                           //     {"time":35,"returned":8},
//  *                           //     {"time":70,"returned":8},
//  *                           //     {"time":105,"returned":8},
//  *                           //     {"time":140,"returned":8},
//  *                           //     {"time":175,"returned":8}
//  *                           // ]
//  *  }, cancelTimeMs + t + 15)    
//  */
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t - interval in ms
 * @return {Function} cancel function
 */
var cancellable = function(fn, args, t) {
    // Call once immediately at time 0
    fn(...args);

    // Set up interval to repeat every t ms
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return cancel function
    return function cancel() {
        clearInterval(intervalId);
    };
};
/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */