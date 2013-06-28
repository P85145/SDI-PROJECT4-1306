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
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}	
}
	// end email function

	
	// URL FUNCTION
	var urlCheck = function (string) {
	var url = string,
		check = "",
		checkArray = [],
		end = url.indexOf(":");

	checkArray[0] = "http:";
	checkArray[1] = "https:";

	check = url.substring(0, end + 1);

	if (check === checkArray[0]) {
		return true;
	}
	else if (check === checkArray[1]) {
		return true;
	}
	else {
		return false;
	}
}
	// end url function
	


	// DECIMAL CHECK FUNCTION
	var checkDec = function (num, dec) {
	var newNumber;

	newNumber = num.toFixed(dec);

	return newNumber;	
}
	//end decimal check function
	
	
	// SEPARATOR FUNCTION
	var sepString = function(arg) {
      var newString;
      newString = arg.replace(/[,]/g, '/');
      if (newString.indexOf("," !== -1)) {
        return newString;
      } else {
        return "error";
      }
    }
	//end separator function
	
	
	// TITLE CASE FUNCTION
	var titleCase = function(arg) {
      var string, word, words, _i, _len;
      string = "";
      words = arg.split(" ");
      for (_i = 0, _len = words.length; _i < _len; _i++) {
        word = words[_i];
        string += ' ' + word.substr(0, 1).toUpperCase() + word.substr(1, word.length);
      }
      return string;
    }
    // end title case function
    
    
    
    // STRING TO NUMBER FUNCTION
	var makeNum = function(arg) {
      var int;
      if (typeof arg === "string") {
        int = parseInt(arg);
        if (typeof int === "number") {
          return int;
        } else {
          return "Not a number";
        }
      } else {
        return "wrong info";
      }
    };

	// end string to number function
	

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

console.log(newLib.emailCheck("cdw8138@fullsail.edu") +  ".");
console.log(newLib.urlCheck("http://www.fullsail.edu") + ". ");
console.log(newLib.urlCheck("https://www.fullsail.edu") + ". ");
console.log("Pi rounded to two decimal places is " + newLib.checkDec(3.14159, 2));
console.log("I want to change my separator from a,b,c to " + newLib.sepString("a,b,c", ",", "/"));
console.log(newLib.titleCase("have a nice day") + "!");
console.log("Two plus three is equal to " + newLib.makeNum("5"));
