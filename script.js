let show = document.getElementById("showTasks");
let add = document.getElementById("add");
let toadd = document.getElementById("tasks");
let input = document.getElementById("todoInput");
let clear = document.getElementById("clear");
let selectAllContainer = document.getElementById("selectAllContainer"); // wrapper div
let selectAll = document.getElementById("selectAll");

// ✅ Show / Hide tasks
show.addEventListener("click", () => {
  if (show.textContent === "Show") {
    show.textContent = "Hide";
    document.getElementById("taskList").style.display = "block";
  } else {
    show.textContent = "Show";
    document.getElementById("taskList").style.display = "none";
  }
});

// ✅ Add a task
add.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter a task to add!");
    return;
  }

  // Create <li>
  let taskItem = document.createElement("li");
  taskItem.style.display = "flex";
  taskItem.style.alignItems = "center";
  taskItem.style.listStyle = "none";

  // Create checkbox
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("taskCheckbox");

  // Create label
  let label = document.createElement("label");
  label.textContent = input.value;

  // Append
  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  toadd.prepend(taskItem);

  // Clear input
  input.value = "";

  // ✅ Update Select All visibility
  toggleSelectAllVisibility();
});

// ✅ Clear completed tasks
clear.addEventListener("click", () => {
  let tasks = document.querySelectorAll("#tasks li");
  let removed = false;

  tasks.forEach(task => {
    let checkbox = task.querySelector("input[type='checkbox']");
    if (checkbox.checked) {
      task.remove();
      removed = true;
    }
  });

  if (!removed) {
    alert("Please select a completed task to clear!");
  }

  // ✅ Update Select All visibility
  toggleSelectAllVisibility();
});

// ✅ Select All toggle
selectAll.addEventListener("change", () => {
  let checkboxes = document.querySelectorAll(".taskCheckbox");
  checkboxes.forEach(cb => {
    cb.checked = selectAll.checked;
  });
});

// ✅ Function: Show/Hide Select All
function toggleSelectAllVisibility() {
  let taskCount = document.querySelectorAll("#tasks li").length;
  if (taskCount > 1) {
    selectAllContainer.style.display = "flex"; // show
  } else {
    selectAllContainer.style.display = "none"; // hide
    selectAll.checked = false; // reset state
  }
}
