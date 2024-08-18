//var let const
// console.log('Hi');

// var numberOne = '152';
// var numberTwo = '22.23434'
// console.log(typeof numberOne)
// console.log(parseInt(numberOne))
// console.log(parseFloat(numberTwo).toFixed(2))

// var footballTeam = ['rony', 'badhon', 'shahin', 'nurul', 'mobin']
// console.log(footballTeam)
// console.log(footballTeam.length)
// console.log(footballTeam[0])
// console.log(footballTeam[5])
// console.log(footballTeam[4])
// console.log(footballTeam.indexOf('rony'))
// console.log(footballTeam.indexOf('mobin'))

// footballTeam.push('sajol')
// footballTeam.pop()
// footballTeam.push('kalim uddin')
// console.log(footballTeam)

// footballTeam.unshift("Akash")
// footballTeam.shift()
// console.log(footballTeam)





// var numbers = [50,34,45,234,54,234,45]
// numbers.shift()
// numbers.push(99)
// numbers.pop()
// numbers[2]=99
// console.log(numbers)
// console.log(numbers[0])


// var money = false
// var job = true
// var home = true

// if(money==true && home==true || job==true){
//     console.log('tui biye korte parbi')
// }else{
//     console.log('taratari biye kor')
// }


// var age = 90

// if(age>=21){
//     if(age>=90){
//         console.log('kaku bura hoye gacen')
//     }else{
//         console.log('tui biye korty parbi')
//     }
    
// }else{
//     console.log('pakhnami koris na basayi ja!!!')
// }




// var fan=0
// fan++
// console.log(fan)


// var fan = 0
// while(fan < 10){
//     console.log(fan)
//     fan++
// }


// for(var num=1; num<=10; num++){
//     console.log(num)
// }

// for(var num=10; num>=1; num--){
//     console.log(num)
// }


// for(var i=1; i<=100; i++){
//     console.log(i,'I Love You')
// }


// 2 * 1 =
// 2 * 2 =
// 2 * 3 =
// 2 * 4 =
// 2 * 5 =
// 2 * 6 =
// 2 * 7 =
// 2 * 8 =
// 2 * 9 =
// 2 * 10 =

// var namotaNumber = 293
// for(var i=1; i<=10; i++){
//     let result = namotaNumber*i
//     console.log(namotaNumber+' x '+i+' = '+result)
// }





// var footballTeam = ['rony', 'badhon', 'shahin', 'nurul', 'mobin', 'yusuf', 'simanto']
// footballTeam.push('imran')
// for(var i=0; i<=6; i++){     //eykhany fixed bolar jonno push kaj kortecy naa
//     console.log(footballTeam[i])
// }

// var footballTeam = ['rony', 'badhon', 'shahin', 'nurul', 'mobin', 'yusuf', 'simanto']
// footballTeam.push('imran')
// footballTeam.push('Asif')

// for(var i=0; i<footballTeam.length; i++){  
//     console.log(footballTeam[i])
// }



// var userName = document.getElementById('user_name')
// console.log(userName.innerText)


// var userName = document.getElementsByClassName('user_name')[0]
// console.log(userName)


// var userName = document.getElementById('user_name')
// userName.innerText = 'Lalala'
// console.log(userName.innerText)

// var userName = document.getElementsByClassName('user_name')[0]
// var userName2 = document.getElementsByClassName('user_name')[1]
// userName.innerHTML = 'Lalala'
// userName2.innerHTML = 'sdflksdhlkf'
// console.log(userName)
// console.log(userName2)




// var userName = document.querySelector('.user_name')
// userName.innerHTML = 'asdlasdfl'
// console.log(userName)


var userName = document.querySelectorAll('.user_name')
// userName[0].innerHTML = 'sdlasdfl'
// console.log(userName)
for(var i=0; i<userName.length; i++){
    userName[i].innerHTML = 'Allah Hafez'
}