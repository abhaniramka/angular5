
// Global Empty Object app is created using Object Literal Syntax
var app = {};

// Adding a function show using function Literal syntax
app.show = function (head) {

    //console.log("Inside the show function ");
    return head;
}

app.update = function(head){
    //alert('Hi');
    return function() {
        var majHead = document.getElementById('majHeading');
        //majHead.innerHTML = app.show(head);
        majHead.innerHTML = head;
    }
}

app.init = function() {
    app.greetButton = document.getElementById("showHeading");
    app.greetButton.addEventListener("click", app.update("JavaScript"));
}