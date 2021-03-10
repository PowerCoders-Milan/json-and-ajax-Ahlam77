var Promise1 = new Promise ((resolve,reject)=>{
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("a").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed
  })
  .then(data => {
    if(data == 1){
      resolve("Good")
    } else {
      reject ("bad")
    }
  })
})
var Promise2 = new Promise ((resolve,reject)=>{
  fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("b").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed
  })
  .then(data => {
    if(data == 2){
      resolve("Good")
    } else {
      reject ("Bad")
    }
  })
})
var Promise3 = new Promise ((resolve,reject)=>{
  fetch('https://jsonplaceholder.typicode.com/todos/3')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementById("c").innerHTML = "User ID: "+data.id+",  title is: "+data.title+ " and  is completed= "+data.completed
  })
  .then(data => {
    if(data == 3){
      resolve("Good")
    } else {
      reject ("bad")
    }
  })
})
Promise.all([Promise1, Promise2, Promise3])
.then((result) => {
  console.log(result)
})