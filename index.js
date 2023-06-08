document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
  
    // Add drag event listeners to each item
    items.forEach(function(item) {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
    });
  
    // Add drop event listener to the second container
    const secondContainer = document.getElementById("second-container");
    secondContainer.addEventListener("dragover", dragOver);
    secondContainer.addEventListener("drop", drop);
  
    // Add reset button event listener
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetContainers);
  
    let draggedItem = null;
  
    function dragStart() {
      draggedItem = this;
      this.classList.add("dragging");
    }
  
    function dragEnd() {
      this.classList.remove("dragging");
      draggedItem = null;
    }
  
    function dragOver(event) {
      event.preventDefault();
    }
  
    function drop() {
      if (draggedItem !== null) {
        draggedItem.classList.remove("dragging");
        draggedItem.classList.add("success");
        secondContainer.appendChild(draggedItem);
        draggedItem = null;
      }
    }
  
    function resetContainers() {
      const firstContainer = document.getElementById("first-container");
      while (secondContainer.firstChild) {
        firstContainer.appendChild(secondContainer.firstChild);
      }
    }
  });
  