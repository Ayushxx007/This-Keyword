console.log("mahika");


setTimeout(()=>{              // Callback Hell
    console.log("one");      // Pyramid of Doom
    setTimeout(()=>{         // hard to maintain
        console.log("two");  // code grows horizontally 
        setTimeout(()=>{     // happen when we want out async operation to happen synchronously
            console.log("three");  // to solve problem of callback hell we use Promises and async & await
            setTimeout(()=>{
                console.log("four");
            },1000);
        },1000);
    },1000);
},1000);

console.log('ganduka');
/*  

Yes, callback hell happens when you want multiple asynchronous 
operations to happen in a specific order (synchronously),
but each operation is asynchronous by nature. In JavaScript,
asynchronous operations (like setTimeout, API calls, or file reading) don't block the execution of the code.
However, when you want these operations to happen one after another (sequentially),
    you end up nesting callbacks inside each other to ensure the correct order of execution.    
    
    
    
    */
