// Resolve Promise
var promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve({message : 'Found link'})
    }, 3000 )
});
promise
// When Promises Fulfilled
.then((data)=>{
    console.log(data);
})
// the main module will work based on the force and the justification .
// when the leadcode junction works
// the SEO optimization is working here
// the main stream optimization
// the main demostative is working on the module

// Promise Inplementation
// Resolve Rejected
var promiseOne = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject({message : 'Error, connection failed' })
    }, 5000)
})

// thesettimeout function will work on the here
// when the gilmps on the base case deliver
// when promises Rejected
promiseOne.catch((error) =>{
    console.log(error);
})


// The main link is working towards the main module 
// When the callback is getting the Asynconuous Behaviours
// Promises resolved the main modules of the datasets

// When the callback function is arrived
async function abc(){
    const data = await getData();
    console.log(data);
}
console.log('1');

function getData(){
    return Promise.resolve('Some Data')
}
async function abc(){
    const data = await getData();
    console.log(data);
}
abc();
console.log('1');
console.log('3');
