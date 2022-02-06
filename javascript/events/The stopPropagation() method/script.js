//The stopPropagation() Method:
//The stopPropagation() method stops the flow of an event through the DOM structure immediately, canceling any further event capturing or 
// ...bubbling before it occurs
//For example, an event handler added directly to a button can call stopPropagation() to prevent an event handler on 
//document.body from being ﬁred, as shown in the following example:

//create a reference to the element with Id of myBtn
let btn = document.getElementById("myBtn");

//attach an event listener
btn.onclick = function(event){
    alert("clicked");
    event.stopPropagation(); //stops the propagation ...
}


document.body.onclick = function(event){
    alert("body clicked");
}

/**
 * Without the call to stopPropagation() in this example, two alerts would be displayed when the
button is clicked. However, the click event never reaches document.body, so the onclick event
handler is never executed.
*/

