/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.includes(needle)){
        index = haystack.indexOf(needle)
        return index
    } else{
        return -1
    }
};

console.log(strStr("sadbutsad","sad"))
console.log(strStr("leetcode","leeto"))
