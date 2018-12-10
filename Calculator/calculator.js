// Create Calculator with 4 Standard Outputs
//  + (addition) ,  - (subtraction),  / (division) 
// last but not least ,  * (multiplication) 

function dothemulti() {  
    var x = document.getElementById("usernum1").value;
    var y = document.getElementById("usernum2").value;
    var z = x * y ;
    document.getElementById("demo3").innerHTML = z;
}
function dothesubt() {  
    var x = document.getElementById("usernum1").value;
    var y = document.getElementById("usernum2").value;
    var subt = x - y ;
    document.getElementById("demo3").innerHTML = subt;
}
function dotheadd() {  
    var x = Number(document.getElementById("usernum1").value);
    var y = Number(document.getElementById("usernum2").value);
    var add = x + y ;
    document.getElementById("demo3").innerHTML = add;
}
function dothediv() {  
    var x = document.getElementById("usernum1").value;
    var y = document.getElementById("usernum2").value;
    var div = x / y ;
    document.getElementById("demo3").innerHTML = div;
}