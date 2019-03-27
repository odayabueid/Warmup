/* 
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/

// var nums = [2, 7, 11, 15];
// var 
// function twoSum(arr,n){
// 	var myArr = []
// 	for(var i = 0 ; i<arr.length ; i++){

// 		if(n === arr[i] + arr[i+1]){

// 			myArr.push(i,i+1); 
// 		}
// 	}
// 	return myArr;
// }


function twoSum(arr,n){
var myArr = []
	for(var i = 0 ; i<arr.length ; i++){

		for(var e = arr[i];e<arr.length;i++){

			if(n=== arr[i] + arr[e]){

				myArr.push(i,e);

			}

		}

	}

	return myArr;


}