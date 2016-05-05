/*
  1. Write a function `lengths` that accepts a single parameter as an argument, namely
  an array of strings. The function should return an array of numbers where each
  number is the length of the corresponding string.
*/

var ran = ["hi", "num", "to"];

function lengths(ran){
	var cup = [];
	for (var i = 0; i<ran.length; i++){
	var wordLength = ran[i].length;
	console.log("length of word at" wordLength)
	}

}

/*
  2. Write a Javascript function called `transmogrifier`
  This function should accept three arguments, which you can assume will be numbers.
  The transmogrified result of three numbers is the product of the first two numbers,
  raised to the power of the third number.
  Your function should return the "transmogrified" result.
*/

function transmogrifier(num1, num2, num3){
	var sum = num1 * num2;
	var sum2 = Math.pow(sum, num3);
	return sum2;
}

transmogrifier(5, 4, 3);
function transmogrifier(num1, num2, num3) {
  var product = num1 * num2;
  var transmogrified = Math.pow(product, num3);
  return transmogrified;
};
/*
  3. Write a function `wordReverse` that accepts a single argument, a string. The method should return a string with the order of the words (not letters) reversed. Don't worry
  about punctuation. I.e. "hello world" should become "world hello".
*/

// your code here