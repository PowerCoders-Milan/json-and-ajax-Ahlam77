fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data => {
  document.getElementById("a").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed+"...To Do has been gotten"
})
.catch(error => console.log("NO "+ error))


//POST


fetch("https://jsonplaceholder.typicode.com/todos/", {
  method: "POST",
  body: JSON.stringify({
    id: 311,
    title: "Ahlam",
    completed: true,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then(data => {

  document.getElementById("b").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed+ "... To Do has been created"
})
.catch(error => console.log("What "+ error));


//PUT///


fetch("https://jsonplaceholder.typicode.com/todos/100", {
  method: "PUT",
  body: JSON.stringify({
    id: 312,
    title: "Mariam",
    completed: false,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
.then(data => {
  document.getElementById("c").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed+"... To Do has been changed"
})
.catch(error => console.log("Error "+ error))



//DELETE//



fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "DELETE",
})
.then((response) => response.json())
.then(data => {
  console.log(data)
  document.getElementById("d").innerHTML = "To Do has been Erased"
})
