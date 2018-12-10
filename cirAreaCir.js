    // Write a program that takes radius from the user
	// and calculates the circumference and area

	// Hint:
	// Area = Math.PI * r * r
	// circumference = 2 * Math.PI * r

	// Create a class named CircleAreaCircumference
	// create a method that takes radius of type double that user
	// entered and returns area
	// create a method that takes radius of type double that user
	// entered and returns circumference
	// Main method
	// Take Users input
	// pass that input into a method that calculates area
    // pass that input into a method that calculates circumference

    // Set Radius to Something
    var radius = 6;

	function calculateCircumference(radius) {

        return 2 * Math.PI * radius;
        
	}

	function calculateArea(radius) {

        return radius * radius * Math.PI;
        
	}

    console.log(calculateCircumference(radius))
    console.log(calculateArea(radius))