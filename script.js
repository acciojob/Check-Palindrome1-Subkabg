// complete the given function

function palindrome(str){
let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
let reverse = cleanedStr.split('').reverse().join('');
	if(reverse == str){
		return true;
	}
	else
		return false;
}
module.exports = palindrome
