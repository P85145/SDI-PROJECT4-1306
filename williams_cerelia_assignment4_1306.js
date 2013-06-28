//alert("JavaScript works!");
// Cerelia Williams
// SDI 1306
// Project 4
// 6/27/13
// Library of Functions



var myLibrary = function() {
	
	
	
	// EMAIL FUNCTION
	var emailCheck = function (localEmail) {
	var email = localEmail,
		checkAt = 0,
		checkDot = 0;

	checkAt = email.indexOf("@");
	checkDot = email.indexOf(".");

	if (checkAt != -1 && checkDot != -1) {
		if (checkAt < checkDot) {
			if (checkDot - checkAt != 1) {
				return (email + " is a valid email");
			}
			else {
				return (email + " is not a valid email");
			}
		}
		else {
			return (email + " is not a valid email");
		}
	}
	else {
		return (email + " is not a valid email");
	}	
}
	// end email function






	// OBJECTS
	return {
		"emailCheck": emailCheck,
		"urlCheck": urlCheck,
		"checkDec": checkDec,
		"sepString": sepString,
		"titleCase": titleCase,
		"makeNum": makeNum,
		
	}
	
}

// LIBRARY
var newLib = new myLibrary();

console.log("Yes, " + newLib.emailCheck("cdw8138@fullsail.edu") +  ".");
console.log("Yes, " + newLib.urlCheck("http://www.fullsail.edu") + ". ");
console.log("Also, " + newLib.urlCheck("https://www.fullsail.edu") + ". ");
console.log("Pi rounded to two decimal places is " + newLib.checkDec(3.14159, 2));
console.log("I want to change my separator from a,b,c to " + newLib.sepString("a,b,c", ",", "/"));
console.log(newLib.titleCase("have a nice day") + "!");
console.log("Two plus three is equal to " + newLib.makeNum("5"));
