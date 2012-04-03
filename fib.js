var month = 0;
var number_of_pairs = 1;
var before_number_of_pairs = 0;

while( month < 12 ){

	var b = before_number_of_pairs;

	number_of_pairs = number_of_pairs + before_number_of_pairs;
	before_number_of_pairs = b;
		
	month = month + 1;
	
	console.log("month: " + month)
	console.log("pairs:" + number_of_pairs);
	console.log("b_pairs:" + before_number_of_pairs);
}