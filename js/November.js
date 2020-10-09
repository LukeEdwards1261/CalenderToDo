fetch('http://localhost:8999/task/readAll')
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

        let table = document.querySelector("table");
        let data = Object.keys(taskData[0]);

        createTableHead(table,data);
        createTableBody(table,taskData);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

  function createTableHead(table,data) {
      let tableHead = table.createTHead();
      let row = tableHead.insertRow();
      for(let keys of data) {
          let th = document.createElement("th")
          let text = document.createTextNode(keys);
          th.appendChild(text);
          row.appendChild(th);
      }
       let th2 = document.createElement("th");
       let text2 = document.createTextNode("View/Update");
       let deltext3 = document.createElement("th");
       let deltext4 = document.createTextNode("Delete");
      th2.appendChild(text2);
      row.appendChild(th2);
      deltext3.appendChild(deltext4);
      row.appendChild(deltext3);
  }

  function createTableBody(table,taskData) {
      for(let taskRecord of taskData) {
      let row = table.insertRow();
        for(let values in taskRecord) {
            console.log(taskRecord[values]);
            let cell = row.insertCell();
            let text = document.createTextNode(taskRecord[values]);
            cell.appendChild(text);
        }
        let newCell = row.insertCell();
        let myViewButton = document.createElement("a");
        let myButtonValue = document.createTextNode("View/Update");
        myViewButton.className = "btn btn-success";
        myViewButton.href= 'NovRecord.html?id='+taskRecord.id //this line 
        myViewButton.appendChild(myButtonValue);
        newCell.appendChild(myViewButton);

        let newCell2 = row.insertCell();
        let myDeleteButton = document.createElement("a");
        let myDeleteButtonValue = document.createTextNode("Delete");
        myDeleteButton.className = "btn btn-danger";
        myDeleteButton.id = "deletetask"+taskRecord.id;
        myDeleteButton.appendChild(myDeleteButtonValue);
        newCell2.appendChild(myDeleteButton);
        addDeleteEvent(taskRecord.id);

      }
  }

  document.getElementById("createNovTable").addEventListener('click',function(stop){
    stop.preventDefault();
    let title = document.getElementById("createTitle").value;
    let task = document.getElementById("createTask").value;
    let type = document.getElementById("createType").value;
    console.log(title, task, type);
    createNovTable(title, task, type);
    window.location.reload();
    
  })

  function addDeleteEvent(Id){

    document.getElementById("deletetask"+Id).addEventListener('click',function(stop){
      stop.preventDefault();
      console.log("the Id of this record is: "+Id);
       
       deleteNovRecord(Id);
      window.location.reload(); 
      console.log("Clicked")

  })}

 
  function createNovTable(title,task,type){

    let dataToPost ={
        "title":title,
        "task":task,
        "type":type
    }
    fetch("http://localhost:8999/task/create/", {
        method: 'post',
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

function deleteNovRecord(id){
  let taskId = parseInt(id);

  fetch("http://localhost:8999/task/delete/"+taskId, {
      method: 'delete', 
      headers: {
          "content-type": "application/json"
      }
      
  })
  .then(res => res.json())
  .then(function (data) {
      console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
      console.error(error); //this line
  });

}

  document.getElementById("DeleteAllNovemberEvent").addEventListener('click',function(stop){
    stop.preventDefault();
    deleteAllNov();
    console.log("Testing")
      }
    )


function deleteAllNov(){
     for (let Id = 1; Id < 50; Id++) {
       if(document.getElementById("deletetask"+Id)){
        deleteAllNovemberEvent(Id);
        console.log("the Id of this record is: "+Id);
       }
       }  
    window.location.reload(); 
    console.log("Clicked")
     }



function deleteAllNovemberEvent(id) {
  let taskId = parseInt(id);

  fetch("http://localhost:8999/task/delete/"+taskId, {
      method: 'delete', 
      headers: {
          "content-type": "application/json"
      }
      
  })
  .then(res => res.json())
  .then(function (data) {
      console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
      console.error(error); //this line
  });
}