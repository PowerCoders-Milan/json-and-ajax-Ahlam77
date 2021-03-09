
const whatchmovie = new Promise ((resolve, reject) => {
    let connect = true;
    if (connect){
        resolve ("this is perfect");
    } else {
        reject (Error("this is bad"));
    }
 
});

const recordmovie = new Promise ((resolve, reject) => {

   let record = true; 
 if (record){
        resolve ("this is perfect");
    } else  {
        reject (Error("this is bad"));
    }
});

const seemovie = new Promise ((resolve, reject) => {

 let see = true; 
 if (see){
        resolve ("this is perfect");
    } else {
        reject (Error("this is bad"));
    }
});

Promise.all ([
    whatchmovie,
    recordmovie,
    seemovie,
]).then((massages) =>{
    console.log (massages) 
})
