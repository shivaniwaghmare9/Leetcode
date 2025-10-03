
var compose = function(functions) {
    return function(x) {
        // Start with the initial input
        let result = x;
        // Apply each function from right to left
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};
