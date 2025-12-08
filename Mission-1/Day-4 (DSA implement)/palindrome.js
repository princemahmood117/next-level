// reads the input in forward as well as in backward the same way
// ex : level ; racar

// [a-z0-9] ---> matched letter and numbers will be eliminated (a,b,c or 1,2,3.. gets eliminated)
// [^a-z0-9] ---> matched letter and numbers will NOT be eliminated, others will (!,*,% etc eliminates)
// g ---> means 'all occurances (global)'
// "" --> replace with empty string

const palindromeCheck = (string) => {
  const normalize = string.toLowerCase().replace(/[^a-z0-9]/g, ""); //'hello world' will be 'helloworld'
  console.log("normalize text : ", normalize);

  const reversed = normalize.split("").reverse().join("");
  console.log("reversed text : ", reversed);

  if (normalize === reversed) {
    return console.log("it is palindrome");
  }
  return console.log("not palindrome");
};

palindromeCheck("prince");

console.log("\n\n");






// TWO POINTER IMPLEMENTATION

// approches from both start and end and matches each character with both side

const isPalindrome = (str) => {
  const normalString = str.toLowerCase().replace(/[^a-z0-9]g/, "");
  console.log(normalString);
  let left = 0;
  let right = normalString.length - 1; // last character of the string

  while (left < right) {
    if (normalString[left] !== normalString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true; //while loop completed all iteration means there is palindrome found
};

console.log(isPalindrome("level"));
