// function changeQuote(){
//     const url = 'https://api.kanye.rest/'
//     fetch(url)
//     .then(res => res.json())
//     .then(data => addText(data))
// }
// function addText(data){
//     document.querySelector('.text').innerHTML=data
// }

// function changeQuote(){
//     const url = 'https://api.kanye.rest/'
//     fetch(url)
//     .then(res => res.json())
    // .then(data => addText(data))
//     .then(data => console.log(data))
// }
// function addText(data){
//     document.querySelector('.text').innerHTML=data
// }


function changeQuote(){
    const url = 'https://api.kanye.rest/'
    fetch(url)
    .then(res => res.json())
    .then(data => addText(data))
}
function addText(data){
    document.querySelector('.text').innerHTML=data.quote
}