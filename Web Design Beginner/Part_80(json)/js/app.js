'{"name":"John", "age":30, "car":null}'

const mobile ={
    name: 'nokia',
    price: 5000,
}
const stringify = JSON.stringify(mobile);
console.log(stringify);
console.log(JSON.parse(stringify));