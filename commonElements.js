    // Write a program that takes two Number Arrays as input, 
    // Then Compares both arrays against one another to 
    // find common values and places them into a New Array


    vowelCount();


    function vowelCount() {
        var arr1 = [4, 7, 3, 9, 2];
        var arr2 = [3, 2, 12, 9, 40, 32, 4];
        console.log(arr2);
        console.log(arr1);
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                   var test = arr2[j];
                   console.log("Common Numers In BOTH Arrays :" + test);
                }
            }
        }
        
        
        
    }