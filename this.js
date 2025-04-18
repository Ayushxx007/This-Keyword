"use strict";
console.log(this); // globalObject   (Window in Browser)
 
// if anytime the value of this is null or undefined js will replace it with globalObject(Window) only in non Strict Mode


function xyz(){     
    console.log(this);  // undefined in strict mode for xyz() its undeifned and for window.xyz() its globalObject(window);
    // bcs this also depends upon how we call the function
    console.log(this);  // globalObject(Window) in non strict mode


}
xyz(); 
window.xyz();

const obj={
 

    name:"xyz",
    age:20,
    getName:function(){
        console.log(this); // obj
    
    },
    getNameArrow:()=>{ // arrow function does not have its own this binding it retians the this of enclosing lexical context
        console.log(this); // globalObject (Window)  it take the this value of lexical environment where it is enclosed
    },
    getNameNested:function(){

      let y=()=>{
        console.log(this); // obj itself bcs this of arrow func is lexical env of it which is this of outer function , which is object itself
      }
      y();
      
  
  },
  getNameNestedArrow:()=>{

    let z=()=>{
      console.log(this); // obj itself bcs this of arrow func is lexical env of it which is this of outer arrow function , which has this as it lexical env which is obj and the this of obj is gloBalObject (Window)
    }
    z(); 
    

},
getNameNestedNested:()=>{

  function w(){
    console.log(this); // undefined in strict and globalObject (window) in non strict
  }
  w(); 
  

}



}


obj.getName(); // obj itself  
obj.getNameArrow(); // globalObject (Window) 
obj.getNameNested(); // obj itself
obj.getNameNestedArrow(); // globalObject (Window)
obj.getNameNestedNested(); // globalObject (Window)



// <button onClick="alert(this)">click me</button>     this inside dom element is the element itself  

class Parent {
  constructor(name,age){
    this.name=name;
    this.age=age;
  }

  xyz(){
    console.log(this); // Parent object( 'this' refers to the instance of the Person class)
  }

   abc=()=>{
    console.log(this); // Parent object( 'this' refers to the instance of the Person class)

   }





}
const obj1=new Parent("xyz",20);
obj1.xyz();
obj1.abc();
//extracting method looses this
const obj2=obj1.xyz;
obj2(); // undefined in strict mode and globalObject (window) in non strict mode


const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // Logs the button element
});

const buttonx = document.querySelector('.buttonx');
button.addEventListener('click', () => {
  console.log(this); // `this`refers to window or enclosing scope, not button
});



