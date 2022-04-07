function isPalindrome(word) {
  // Write your algorithm here
  let wordReverseArray = [];
  for (let i = word.length; i >= 0; i--) {
    wordReverseArray.push(word[i]);
  }
  const newWord = wordReverseArray.join('');
  if (newWord === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  function isPalindrome(string) {
    add new string variable
    iterate over the input string in reverse
      add each letter to the new string variable
        if the new string is the same as the input string
          return true
        else
          return false
  }
*/

/*
  Add written explanation of your solution here
  function isPalindrome will take in one word, which is a string
  it should return true if the input word is a palindrome and false if it isn't
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
