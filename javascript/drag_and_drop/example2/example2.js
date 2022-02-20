(function(){
    /**
     * These three events are essential:
     * 1. drop
     * 2. dragstart
     * 3. dragover
     * 
     * The "dragover" event could be replaced with "dragenter"
     */
    document.body.addEventListener("drop", handleDropEvent);
    document.body.addEventListener("dragstart", handleDragStartEvent);
    document.body.addEventListener("dragover", handleDragOverEvent);




    //without the "dragover" event or "dragenter" event, the "drop" event will not trigger
    //Also, the default behaviour of this event should be prevented.
    //this is done by calling the preventDefault() method on event object
    function handleDragOverEvent(event){

        event.preventDefault(); //prevents the default behaviour of the event.

        //preventing the default behaviour of event could also facilitate the triggering of the "drop" event


    }


    function handleDropEvent(event){
        console.log("dropped");


    }

    function handleDragStartEvent(event){

        console.log("Drag started");

    }


    check = new DataTransfer();
    console.log(check);

    check.setData("testing", "this is testing");
    
    testing_data = check.getData("testing");

    console.log(testing_data);

}());