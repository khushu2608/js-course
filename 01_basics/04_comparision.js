console.log(null == 0)  //null is only equal to undefined when using ==. null is not converted to number when compared with numbers using ==.
console.log(null >= 0)  //For relational comparisons (<, <=, >, >=), JavaScript converts null to a number. so the output is true
console.log(null <= 0)  // same as above rule

console.log(null == undefined)  //null is only equal to undefined when using ==.
console.log(undefined == 0) //Rule: undefined is only equal to null when using ==.It is not converted to number in == comparison with numbers.
console.log(undefined >= 0)// For relational operators (<, <=, >, >=), JavaScript tries to convert both sides to numbers. Number(undefined) → NaN.
//Any comparison with NaN is false.
console.log(undefined <= 0)// same reasoning as above
console.log("2" == 1)   //== allows type coercion. When comparing a string with a number, JavaScript converts the string to a number.
// Strict equality (===)

// === does not allow type coercion.

// Both the value and the type must match.
console.log("2" === 2)