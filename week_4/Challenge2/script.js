// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
var button = document.getElementById("justin-btn");

var content = document.getElementById("result");

button.addEventListener("mouseover", function() {
    content.innerHTML = "";
    content.style.color = "blue";
    content.style.backgroundColor = "pink";
    content.textContent = "Welcome to My Heart";
})

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
button.addEventListener("mouseout", function () {
    content.innerHTML="";
    content.style.color = "red";
    content.style.backgroundColor = "black";
    content.textContent = "Don't Leave My Heart";
})