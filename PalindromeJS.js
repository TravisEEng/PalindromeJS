
function palindrome(str) {
  
var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase(); 
 var comparStrReverse = removeChar.split('').reverse().join('');
  
 
  if(removeChar == comparStrReverse)
  return true;
  else{
    return false;
  }
}





palindrome("race car");
