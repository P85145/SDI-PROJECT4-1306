//alert("JavaScript works!");
// Cerelia Williams
// SDI 1306
// Project 4
// 6/27/13
// Library of Functions



var myLibrary = function() {

	// FUNCTION
	var checkPhone = function(val) {
		
		var strLen = val.length;				
		for (var i=0; i <=strLen; i++){      
		
			if (val.substring(1, i+1) === "-") 
			   (val.substring(1, i+4) === "-")
			   (val.substring(1, i+8) === "-") 
			
				return true;
				
			} else {
				return false;
			}
		
		}
		
	} // end check string
// change i=? in the function to start at a new position ex) looking for 2nd dash
	
	
	
	
	// FUNCTION
	
	
	
	// FUNCTION
	
	
	
	// FUNCTION
	
	
	
	// FUNCTION
	
	
	
	// FUNCTION







	// Objects
	return {
		"checkPhone": checkPhone,
		
	}
	
}

var newLib = new myLibrary();

console.log("Is the dash in the correct position? " + newLib.checkPhone("123-456-7890"));


