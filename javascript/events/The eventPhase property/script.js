/**
 * The Event Phase: eventPhase Property
 */

/**
 * The eventPhase property helps in determining which phase of the event is currently active, recall that there are two phases of events: 
 * 1. Event Capturing
 * 2. Event Bubbling 
 * 
 * If the event handler is called during the capture phase, eventPhase is 1; if the event handler is at target, eventPhase is 2; if the event handler 
 * is during the bubble phase, eventPhase is 3.  
 */

//For example: 
let btn = document.getElementById('myBtn');
btn.onclick = function(event){
alert(event.eventPhase);
//2
};


document.body.addEventListener('click', function(event){
alert(event.eventPhase);
//1
}, true);


document.body.onclick = function(event){
alert(event.eventPhase);
//3
};

/**
 * When the button in this example is clicked, the ﬁrst event handler to ﬁre is the one on document.body in the capturing phase, which pops up an alert that displays 1 as the eventPhase. 
 * Next, event handler on the button itself is ﬁ red, at which point the eventPhase is 2. The last event handler to ﬁre is during the 
 * bubbling phase on document.body when eventPhase is 3 . Whenever eventPhase is 2, this, target, and currentTarget are always equal.
 */