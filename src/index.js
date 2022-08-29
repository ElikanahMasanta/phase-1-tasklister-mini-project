document.addEventListener("DOMContentLoaded", () => {
  // your code h  const submit = document.getElementById('create-task-form');
  const dropDownStatus = document.getElementById("priority");
  const clicking = document.getElementById('tasks');
  const button1 = document.getElementById('button1');
  const tasksArr = [];
  button1.addEventListener('click', renderAscending);
  button2.addEventListener('click', renderDescending);
  
  dropDownStatus.addEventListener('change', function(event){
    dropDownStatus.className = priorityColor(dropDownStatus.value)
  })
  submit.addEventListener('submit', handleSubmit);
  clicking.addEventListener('click',function(event){
    console.log(`${event.target.innerText} has been removed`)
    event.target.remove();
  })
function priorityColor(priority){
  switch(priority){
    case "high":
      return "red"
    case "medium":
      return "orange"
    case "low":
      return "green"
    default: return;
  }
}
function handleSubmit(event){
  event.preventDefault();
  const ul = document.getElementById('tasks')
  const li = document.createElement('li')
  li.innerText = document.getElementById('new-task-description').value;
  li.name = document.getElementById('asign-to').value;
  li.className = priorityColor(dropDownStatus.value)

  // const table = document.createElement('table')
  // const row = table.insertRow(0);
  // const cell1 = row.insertCell(0);
  // document.getElementById('list').append(table)
  // row.innerText = li.name;
  // cell1.innerText = "li";

  ul.append(li)
  //create task object
  const objectOfTasks = {task: li.innerText, priority: dropDownStatus.value};
  // push into tasks array
  tasksArr.push(objectOfTasks);
  console.log(objectOfTasks);
  console.log(tasksArr);
  console.log(li.name);
});
