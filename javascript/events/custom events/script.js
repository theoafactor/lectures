/**
 * Custom Events
 */


/**
 * - Custom events are created within the code and are called usually after a particular situation occured. 
 * - With Custom events, you will be able to trigger the event instead on using the conventional event - event handling method.
 * 
 * One of the benefits of using Custom Events is that it encourages Loose Coupling. 
 * Say we’re doing operations from shared code, and we want to let page code know
    when it’s time to react to a particular condition. If we use the global
    function approach, we introduce the disadvantage that our shared code needs to
    define a fixed name for the function, and all pages that use the shared code need
    to use such a function.

    Moreover, what if there are multiple things to do when the triggering condition
    occurs? Making allowances for multiple notifications would be arduous and necessarily
    messy. These disadvantages are a result of tight coupling, in which the code that detects
    the conditions has to know the details of the code that will react to that condition.

    Loose coupling, on the other hand, occurs when the code that triggers the condition
    doesn’t know anything about the code that will react to the condition, or even if there’s
    anything that will react to it at all. One of the advantages of event handlers is that we can
    establish as many as we want, and these handlers are completely independent of each
    other. So event handling is a good example of loose coupling. When a button-click
    event is triggered, the code triggering the event has no knowledge of what handlers
    we’ve established on the page, or even if there are any. Rather, the click event is pushed
    onto the task queue by the browser, and whatever caused the event to trigger could care
    less what happens after that. If handlers have been established for the click event,
    they’ll eventually be individually invoked in a completely independent fashion.

    In our scenario, the shared code, when it detects an interesting condition, 
    triggers a signal of some sort that says, “This interesting thing has happened; 
    anyone interested can deal with it,” and it couldn’t
    give a darn whether anyone’s interested. 


    Custom events are a way of simulating (for the user of our shared code) the experi-
    ence of a real event, but an event that has business sense within the context of our
    application. The following listing shows an example of triggering a custom event.

    Let's take a look at an example: 
 */

/**
 *  - In the source code, custom_event.html file, you will see a comment to the loader that should be loaded when you click 
 * on the Get Started button
 * 
 *  - The loading gif has been hidden with css (style.css).
 *  - When the Get Started button is clicked, the loading gif should appear.
 * 
*/


// 1. Create a Custom Event
// - The CustomEvent Constructor lets you create a new instance of custom event.
// - It takes two arguments:
//  i. event name, which is a string and can be anything
//  ii. the event details, which is an optional argument and is an object: when the details argument is not passed, it defaults to null    
const appStartedEvent = new CustomEvent("app-started", {
    detail:{
        name: "app-started",
    otherInfo: ""
    } 

});



//2. Add an Event Listener
// 1. Note that 'app-started' is still used, since this is the event we are binding to
// document.addEventListener("app-started", function(event){

//     //get the information about this event
//     console.log(event);

//     //if the details argument was passed to the CustomEvent Constructor, we can access it here from the event object
//     //e.g
//     console.log(event.details);

// })



/**
 * A custom event trigger that dispatches events..
 *  - This function contains the disptach method, called on the target..
 *  - The dispatchEvent() method actually announces the event and it takes an instance of the Custom event as an argument
 *  - Read more about disptach() method here: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
 * @param {*} target 
 * @param {*} eventType 
 * @param {*} eventDetail 
 */
 function triggerCustomEvent(target, eventType, eventDetail){

    // - Creates a new instance of the CustomEvent
    /**
     * The CustomEvent Constructor takes two arguments, the second is optional
     * - 1. The type of the event
     * - 2. The details of the event, this is an object.
     */
    const event = new CustomEvent(eventType, {
        detail: eventDetail
    });


    // - Announces the event.
    target.dispatchEvent(event);

}

//We can attach this new custom event to when the button was clicked..
//meaning the click of the button, though an event, can also trigger another event

const clickBtn = document.getElementById("click-me");

clickBtn.addEventListener("click", function(){

    triggerCustomEvent(clickBtn, "app-started", {
        name: "app-started", 
        description: "event that indicates that the app has started"
    });


})


//Listen for this Custom event ie, 'app-started' event 
clickBtn.addEventListener("app-started", function(event){

    // console.log(event);

    document.querySelector("#loading-gif").style.display = "inline-block";

})

//An Event created, needs to be dispatched
//document.dispatchEvent(appStartedEvent);