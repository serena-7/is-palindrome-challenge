// Write your code below
function isPalindrome(str){
    let backwards = [];
    for(let i = 0; i < str.length; i++){
        backwards.unshift(str[i]);
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] !== backwards[i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("noon"));