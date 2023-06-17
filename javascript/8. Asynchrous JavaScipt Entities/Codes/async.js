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
