// Converting to Upper and Lower Case

// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

// example:1

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2)

// EXAMPLE:2

// let text1 = "A string is converted to upper case with toUpperCase";
// let text2 = text1.toUpperCase();
// console.log(text2)

// examle :3

// let text="The replace() method replaces a specified value with another value in a string:";
// let text1=text.toUpperCase();
// console.log(text1)

// lowercase
//  examp: 1
// let raghu="THE REPLACE() METHOD REPLACES A SPECIFIED VALUE WITH ANOTHER VALUE IN A STRING"
// let varan=raghu.toLowerCase()
// console.log(varan)

// 5.JavaScript String concat()

// let text1="raghu"
// let text2="varan"
// let text3="manthena"
// let text4=text1.concat(" ",text2," ",text3)
// console.log(text4)

// 6.JavaScript String trim()

// let text="     hello world!     "
// console.log(text)

// let text="            raghuvaran              "
// let text1=text.trim()
// console.log(text1)

// 7.JavaScript String trimStart()

// let text="            raghuvaran          manthena"
// let text1=text.trimStart()
// console.log(text1)


// 7.1.JavaScript String trimEnd()

// let text="            raghuvaran  manthena         "
// let text1=text.trimEnd()
// console.log(text1.length)

// JavaScript String Padding
// ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

// 8.1.JavaScript String padStart()

// let text="5"
// let text1=text.padStart(4,"0")
// console.log(text1)
// let text="12345678901425368"
// let text1=text.padStart(20,"0")
// console.log(text1)

// let text="12345678901425368"
// let text1=text.slice(-4).padStart(17,"*")
// console.log(text1)


// let text="12345678901425368"
// let text1=text.padEnd(10,"0")
// console.log(text1)

// let text="12345678901425368"
// let text1=text.padEnd(10,"*")
// console.log(text1)

 let email="raghu.mr199@gmail.com"
 let raghu=email.charAt(3).slice(5).padStart(21,"*")
 console.log(raghu)