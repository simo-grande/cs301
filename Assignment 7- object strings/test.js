function countUppers(s) {
    
    var count = 0;
    for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if (uppers.indexOf(c) != -1) {
    count++;
    }
    }
    return count;
}
var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYz';
console.log(countUppers(uppers));