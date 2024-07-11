const textBox = document.getElementById("text-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (textBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.textContent = textBox.value;

        // Create delete button
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        span.className = "close";
        li.appendChild(span);

        // Append the list item to the container
        listContainer.appendChild(li);
    }
    textBox.value = ''; // Clear the input box after adding the task
    
    // Add event listener to the close button
    document.querySelectorAll('.close').forEach(item => {
        item.onclick = function() {
            this.parentElement.remove();
        };
    });
}

listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        
    }

},false);
