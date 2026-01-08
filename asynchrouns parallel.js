
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        if (functions.length === 0) {
            return resolve([]);
        }

        functions.forEach((fn, i) => {
            try {
                fn().then((result) => {
                    results[i] = result;
                    completed++;
                    if (completed === functions.length) {
                        resolve(results);
                    }
                }).catch(reject); // reject immediately on error
            } catch (err) {
                reject(err); // catch synchronous errors
            }
        });
    });
};


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */