   // Write a JavaScript program
    // that sums all elements in array
    // once you have the sum FIND
    // the average of the sum.


    var numbers = [1,2,4,5,6,7,8];
    // calculate sum of all array elements
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
       
        sum = sum + numbers[i];
    }
    // calculate average value
    var average = sum / numbers.length;
    console.log("Average value of the array elements is : " + average);