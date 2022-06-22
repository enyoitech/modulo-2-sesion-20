//const cargarTareas = () =>{
//  fetch('http://localhost:3000/tasks')
//  .then(response => response.json())
//  .then(payload => console.log(payload));
//}

// cargarTareas()


var url = 'http://localhost:3000/tasks'; 
var data = {"description": "Lavar platos 2", "state": false  };

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json',
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log(response));   