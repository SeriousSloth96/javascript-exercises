const removeFromArray = function() {
    if (arguments.length < 2){
        return;
    }
    const originalArray = arguments[0];
    const argumentsToMatch = [...arguments].slice(1);
    return originalArray.filter((element) => !argumentsToMatch.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
