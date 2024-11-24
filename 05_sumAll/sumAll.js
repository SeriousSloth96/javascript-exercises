const sumAll = function() {
    if (arguments.length != 2 || !validateArguments(arguments)){
        return "ERROR";
    }
    const lesser = Math.min(arguments[0],arguments[1]);
    const higher = Math.max(arguments[0],arguments[1]); 
    return (lesser + higher) * ((higher - lesser + 1) / 2);
};

const validateArguments = function() {
    let valid = true;
    [...arguments[0]].forEach(argument => {
        if (!Number.isInteger(argument) || argument < 0){
            valid = false;
            return;
        }
    });
    return valid;
}

// Do not edit below this line
module.exports = sumAll;
