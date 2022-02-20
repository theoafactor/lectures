(function(){
    const listItems= document.querySelectorAll(".list-item");

    let originalX;
    let originalY;

    listItems.forEach(listItem => {

        listItem.addEventListener("dragstart", handleDragEvent);


        listItem.addEventListener("dragend", handleDragOverEvent);

    });





    function handleDragEvent(event){
        originalX = event.pageX;
        originalY = event.pageY;
    }



    function handleDragOverEvent(event){


        let listContent = event.target.innerText;
        //console.log("Drag over: ", event);

        let dragX = event.pageX;
        let dragY = event.pageY;

        console.log("X: ", dragX);
        console.log("Y: ", dragY);


        if(dragX > originalX){
            //drag was made to the right..
            //save the list..
            console.log("Save this list item");
            confirm(`Are you sure you want to save this item: ${listContent}?`)
        }

        if(dragX < originalX){
            // drag was made to the left
            //delete the list item
            console.log("Delete this list item");
            confirm(`Are you sure you want to delete this item: ${listContent}?`)


        }

    }


}())