/**
 * The Drag and Drop API allows web developers add drag and drop features to their applications
 * 
 * It is derived from the following interfaces: DragEvent, DataTransfer, DataTransferItem and DataTransferItemList.
 * 
 * To make this feature works: 
 * 1. There must be atleast an element with its draggable attribute set to 'true'. See example1.html
 * 2. An element whose draggable is not set to true will be dragged.
 * 3. There should a place or an area to drag the draggable item to.
 * 4. A draggable item or element whose draggable element has been set to true.
 * 
 * Once an element's draggable attribute is set to true, the following must be listened to: 
 * 
 * - dragstart: an event that is triggered when a draggable element has just been dragged.
 * - dragover: an event that is triggered when a draggable element has been dragged over another element. The other element can be draggable or not.
 * - drop: an event that is triggered when a draggable element is dropped on another element. This is typified by releasing the mouse key.
 * 
 * 5. It is important to note that drop event does not fire unless the dragover or dragenter event is fired and their default behaviour prevented. For example, in 
 * code sample 1 below:
 * 
 */



//Sample 1. ------------------------------------------ 
//- Notice that the drop event is called here
document.body.addEventListener("drop", handleDropEvent);


//this code will not run
//hence, 'dropped' will not be logged to the console
function handleDropEvent(){
    console.log("Dropped")
}
//- End of Sample 1. ----------------------------------

/**
 *  - One reason, the "drop" event was not fired as shown above is that the "drop" event needs to be preceeded by another event. 
 * Usually, this event can either be: 'dragenter' or 'drapover'
 * 
 * - To make the 'drop' event work, or to trigger the 'drop' event, the default behaviour of either 'dragenter' or 'dragover' event
 * must be prevented. Take Sample 2 as an example: 
 */

//Sample 2 ----------------------------------------------------------
// - In this sample, the code is valid and both events will trigger.
document.body.addEventListener("drop", handleDropEvent);
document.body.addEventListener("dragover", handleDragOverEvent);


function handleDropEvent(){
    console.log("dropped");
}

function handleDragOverEvent(event){
    event.preventDefault(); //This prevents the default behaviour the dragover event. Also, this will let "drop" event trigger.

}

//End of Sample 2 ---------------------------------------------------



//The Life Cycle of Drag and Drop Features
/**
 * 1. A typical drag and drop feature starts when the draggable attribute is set to true.
 * 2. There should be a place to put the draggable element. 
 * 3. A draggable element element is being dragged to another element; say for example Element B. This Element B is therefore known as 
 * the droppable element.
 * 4. There are seven main event types fired during the life-cycle of a drag and drop event: 
 *  - drag 
 *  - dragstart
 *  - dragenter
 *  - dragover
 *  - dragend
 *  - dragleave
 *  - drop 
 */

/**
 * The DragEvent Interface is made up of: 
 * 1. dataTransfer property which in itself is an object.
 * 2. Constructor and 
 * 3. Event types which have already been listed above.
 * 
 * 
 * 
 * 
 * --------------------------
 * The dataTransfer Property
 * --------------------------
 *  - The dataTransfer property is an object used to hold the data that is being dragged during the life cycle of a drag and drop event.
 *  - All drag events have access to this property.
 *  - It makes use of a constructor that creates a new DataTransfer object, for example: 
 *      
 *      dataTransfer = new DataTransfer();
 * 
 *  - This allows for usage of DataTransfer outside events. Though, ofcourse, this feature is solidly available in DragEvents too. However, when 
 * used outside an event, properties such as 'dropEffect', 'effectAllowed', 'files' and 'items' are not available. 
 * 
 * 
 * Properties of DataTransfer
 * 1. dropEffect: This gives the type of drag and drop operation. The values can be 'none', 'link', 'copy' or 'move'
 * 2. effectAllowed: Gives all the allowed operation types.
 * 3. files: Consists a list of the files available in the data transfer
 * 
 */