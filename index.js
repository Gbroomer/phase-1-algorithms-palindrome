function isPalindrome(word) {
  // Write your algorithm here
  const stringArray = word.split("");
  const stringArrayRev = stringArray.slice().reverse()
  if(stringArrayRev.join("") === stringArray.join("")) {
    console.log("is a Palindrome")
    return true
  } else
  console.log("is not a Palindrome")
  return false
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
