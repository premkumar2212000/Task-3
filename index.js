// 1. Create two variables a = 20 and b = 10. Perform all assignment operations (+=, -=, *=, /=, **=, %=) and print the results.
let a = 20;
let b = 10;

a += b;
console.log("1. a += b:", a);

a = 20;
a -= b;
console.log("   a -= b:", a);

a = 20;
a *= b;
console.log("   a *= b:", a);

a = 20;
a /= b;
console.log("   a /= b:", a);

a = 20;
a **= b;
console.log("   a **= b:", a);

a = 20;
a %= b;
console.log("   a %= b:", a);


// 2. Check whether 25 is greater than 15 using the comparison operator.
let result2 = 25 > 15;
console.log("2. 25 > 15:", result2);


// 3. Check whether 50 is equal to "50" using both == and ===.
console.log("3. 50 == '50':", 50 == "50");
console.log("   50 === '50':", 50 === "50");


// 4. Check whether 100 is not equal to 200 using != and !==.
console.log("4. 100 != 200:", 100 != 200);
console.log("   100 !== 200:", 100 !== 200);


// 5. Check whether a person's age is greater than or equal to 18 and print the result.
let age = 20;
console.log("5. Age >= 18:", age >= 18);


// 6. Use the AND operator to check whether 20 > 10 and 30 < 50.
let result6 = 20 > 10 && 30 < 50;
console.log("6. 20 > 10 && 30 < 50:", result6);


// 7. Use the OR operator to check whether 10 > 20 or 50 > 30.
let result7 = 10 > 20 || 50 > 30;
console.log("7. 10 > 20 || 50 > 30:", result7);


// 8. Use the NOT operator to reverse the result of 100 > 50.
let result8 = !(100 > 50);
console.log("8. !(100 > 50):", result8);


// 9. Write one condition using three AND operators and print the result.
let result9 = 10 > 5 && 20 > 10 && 30 > 20 && 40 > 30;
console.log("9. Three AND operators:", result9);


// 10. Write one condition combining AND, OR, and NOT operators.
let result10 = (10 > 5 && !(20 < 10)) || 5 === 10;
console.log("10. Combined condition:", result10);


// 11. Use the ternary operator to check whether a number is positive or negative.
let num = 15;
let checkNumber = num >= 0 ? "Positive" : "Negative";
console.log("11. Number is:", checkNumber);


// 12. Create a variable isLoggedIn = true. Use the ternary operator to print "Welcome" or "Please Login".
let isLoggedIn = true;
let loginMessage = isLoggedIn ? "Welcome" : "Please Login";
console.log("12. Login Status:", loginMessage);


// 13. Create two string variables containing your first name and last name. Combine them using concatenation.
let firstName = "Prem";
let lastName = "kumar";
let fullName = firstName + " " + lastName;
console.log("13. Full Name:", fullName);


// 14. Create three variables: name, age, and city. Display them using a template string.
let name = "Premkumar";
let personAge = 25;
let city = "Salem";
console.log(`14. My name is ${name}, my age is ${personAge}, and my city is ${city}`);


// 15. Check the data type of "JavaScript" + 100 using typeof.
let val1 = "JavaScript" + 100;
console.log("15. Value:", val1);
console.log("    Type:", typeof val1);


// 16. Check the data type of 100 + true using typeof.
let val2 = 100 + true;
console.log("16. Value:", val2);
console.log("    Type:", typeof val2);


// 17. Convert "250" into a number using the Number() constructor and add 50.
let numStr = "250";
let sumResult = Number(numStr) + 50;
console.log("17. Number('250') + 50:", sumResult);


// 18. Use Number() to convert "123", "abc", true, false, and null. Print each result.
console.log("18. Number('123'):", Number("123"));
console.log("    Number('abc'):", Number("abc"));
console.log("    Number(true):", Number(true));
console.log("    Number(false):", Number(false));
console.log("    Number(null):", Number(null));


// 19. Use Boolean() to convert "", "Hello", 0, 1, undefined, and null. Print each result.
console.log("19. Boolean(''):", Boolean(""));
console.log("    Boolean('Hello'):", Boolean("Hello"));
console.log("    Boolean(0):", Boolean(0));
console.log("    Boolean(1):", Boolean(1));
console.log("    Boolean(undefined):", Boolean(undefined));
console.log("    Boolean(null):", Boolean(null));


// 20. Create a variable price = "500" and convert it into a number. Then add 100 and print the final result.
let price = "500";
let finalPrice = Number(price) + 100;
console.log("20. Final Result:", finalPrice);
