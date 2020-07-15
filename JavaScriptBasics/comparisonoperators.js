// Comparion Operators

// '>' :  greater thean
// '>=':  greater than or equal to
// '<' :  less than
// '<=':  less than or equal to
// '==':  Equal to
// '===': Strict Equal to 
// '!=':  Not Equal to
// '!===' Strict Not Equal to







console.log(3>2);
console.log(100>=100);
console.log("apple" > "bear"); 
//False, determined by the place of the first letter in the string.
// exapmle: a = 0 and z = 26. since 'b'in bear comes after 'a'in apple. 'B' holds a higher numerical 
console.log("100" < "apple"); 
// true, determined via numbers are less then letters
console.log("3" == 3); 
// True, the sting gets converted to a number, only checks for match in value
console.log("3" === 3); 
// False, th string does not convert to a number,
//  it has to match in BOTH data Type and Value,
console.log("" == 0);
// True, since the string is empty it has no value same as 0
console.log("" === 0);
// False, the sring has no value but is alse a string
// 0 has no value but is a number so they do not match in Type
console.log(165 === 165.9);
// False, they match in data Type but not in data Value
console.log("Python" === "HTML");
// False, they match in data type but not in data value
console.log("JavaScript" === "JavaScript");
// True, they match in both data type and data value
console.log("javascript" === "JavaScript");
// Fals, they match in data type but NOT in data value
console.log(10 != 100);
// True, 10 does NOT equal 100, they do not hold the same data Value
console.log("10" !== 10);
// True, the String does NOT macth number in Data Value 