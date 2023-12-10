const repeatString = function(string, num) {
    if(num == 0 || string == '') {
        return '';
    } else if(num < 0) {
        return 'ERROR';
    } else {
        let text = string;
        for (let i = 1; i < num; i++) {
            text += string;
        }
        return text;
    }
};

// Do not edit below this line
module.exports = repeatString;
