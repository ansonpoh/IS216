function calculate() {

    // YOUR CODE GOES HERE
    var first = document.getElementById("number1").value;
    
    var second = document.getElementById("number2").value;

    var calc = sum(parseInt(first), parseInt(second));

    var result = document.getElementById("result");

    result.innerText = "The sum is: " + calc;
}

function sum(first, second) {
    var result = 0;
    for(i = first; i <= second; i++) {
        result += i;
    }
    return result;
}       

