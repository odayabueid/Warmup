// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		//your code is here

		
		var total = "";

		for(var i = 0 ; i < n; i++){

			total = total + s

		}

		return total;
	}