// function sum(){
//     console.log(8+8)
// }
// sum()


// function sum(a,b){
//     console.log(a+b)
// }
// sum(123,123)
// sum(23,23)
// sum(12,12)


// function sum(a,b){
//     let total = a+b
//     return total
// }
// let result = sum(5,5)
// console.log(result)




// function sum(a,b){
//     var total = a+b
//     return total
// }
// var result = sum(12,13)

// var h1 = document.getElementById('sum')
// h1.innerHTML = result



// function pala(){
//     console.log('pala aitacy')
// }
// // pala()



function pala(){
    console.log('pala aitacy')
}

// var button = document.getElementById('btn')
// // console.log(button)
// button.addEventListener('click', function(){
//     pala()
// })






// document.getElementById('btn').addEventListener('click', function(){
//     pala()
// })








// document.getElementById('btn').addEventListener('click', function(){
//     let inputNumber = document.getElementById('number')
//     let convertNumber = parseInt(inputNumber.value)
//     let display = document.getElementById('even_odd')
//     display.style.color = 'red'
//     display.style.backgroundColor = 'green'
//     let displayNumber = document.getElementById('displayNumber') 
//     displayNumber.style.color = 'blue'



    
//     if(convertNumber%2==0){
//         displayNumber.innerHTML = convertNumber
//         display.innerHTML = 'even'
//         inputNumber.value=''
//     }else{
//         displayNumber.innerHTML = convertNumber
//         display.innerHTML = 'odd'
//         inputNumber.value = ''
//     }
// })







function checkEvenOdd(){
    let input = document.getElementById('number').value
    if(input==''){
        // alert('ami')
        document.getElementById('number').style.border='1px solid red'
        document.getElementById('number').focus()
    }else{

        let input = document.getElementById('number').value
        if(parseInt(input)%2==0){
            document.getElementById('displayNumber').innerHTML=input
            document.getElementById('displayNumber').style.color='red'
            document.getElementById('even_odd').innerHTML='even'
            document.getElementById('even_odd').style.color='red'
            document.getElementById('number').value=''
            document.getElementById('number').style.border='1px solid black'

        }else{
            document.getElementById('displayNumber').innerHTML=input
            document.getElementById('displayNumber').style.color='red'
            document.getElementById('even_odd').innerHTML='odd'
            document.getElementById('even_odd').style.color='red'
            document.getElementById('number').value=''
            document.getElementById('number').style.border='1px solid black'
        }


    }
}








let ludoButton = document.getElementById('ludo_btn')
ludoButton.addEventListener('click', function(){

    let chokka = Math.random()*6
    document.getElementById('count').innerHTML = Math.ceil(chokka)
    console.log()
})



