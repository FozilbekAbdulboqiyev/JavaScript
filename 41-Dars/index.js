function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
  
    if (task === "") {
      alert("Mlumot kiting");
      return;
    }
  
    let li = document.createElement("li");
    li.textContent = task;
  
    
    li.onclick = function () {
      if (li.className === "") {
        li.className = "";
      } else {
        li.className = "";
      }
    };
  

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "";
  
   
    deleteBtn.onclick = function (e) {
      e.stopPropagation(); 
      li.remove();
    };
  
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  