const params = new URLSearchParams(window.location.search);

for(let param of params) {
    console.log("id is",param)
    let id = param[1];
    console.log(id);
    getSingleRecord(id);
}

function getSingleRecord(id) {
fetch('http://localhost:8999/task/read/'+id)
.then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(taskData) {
        console.log(taskData);

        document.getElementById("taskId").value=taskData.id;
        document.getElementById("taskTitle").value=taskData.title;
        document.getElementById("task").value=taskData.task;
        document.getElementById("taskType").value=taskData.type;

 
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

document.querySelector("form.OctRecord").addEventListener("submit",function(stop) {
    stop.preventDefault();

    let formElements = document.querySelector("form.OctRecord").elements;

    let id = formElements["taskId"].value;
    let title = formElements["taskTitle"].value;
    let task = formElements["task"].value;
    let type = formElements["taskType"].value;
    console.log(id);
    console.log(title);
    console.log(task);
    console.log(type);
    update(id,title,task,type);
    
})

function update(id,title,task,type){
    let taskId = parseInt(id);
    //let task = parse(task); //string not int

    let dataToPost ={
        "title":title,
        "task":task,
        "type":type
    }
    fetch("http://localhost:8999/task/update/"+taskId, {
        method: 'put', //might be lowercase "put"
        headers: {
            "content-type": "application/json"
        },
        body:JSON.stringify(dataToPost)
    })
    .then(res => res.json())
    .then(function (data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function (error) {
        console.error(error);
    });

     console.log(dataToPost)
}