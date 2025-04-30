
// console.log("start");

// const pro = new Promise((resolve,reject)=>{
//  setTimeout(()=>{resolve(8);},2000);
// });

// function prom(){
//   pro.then((data)=>{console.log(data)});
//   console.log("namaste js")

// }

// prom();
//.






// // async function always return Promise
// // if you explicitly  return a value, it will be wrapped in a Promise

// async function  profunc(){
//   console.log("hello world");
//   const val = await pro; 
//   console.log("namaste js1")      // await can only be used inside async function
//   console.log(val);
// }


// profunc();

// console.log("end");

console.log("start");
const p=new Promise((resolve,reject)=>{ resolve("yes")});


async function xyz(){
  
 const val= await p;
 console.log(val);
}

xyz();




console.log("end")



