    // Write a program that takes two Number Arrays as input, 
    // Then Compares both arrays against one another to 
    // find common values and places them into a New Array


    commonS();

    function commonS() {
        var arr1 = ["bob", "john", "doe", "ron", "jack", "mary", "mia"];
        var arr2 = ["mia", "lin", "linda", "tia", "lb", "jack", "doe"];
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    var commonS = arr2[j].match(arr1[i]);
                }
            }
        }
        console.log(commonS)
    }