// console.log(typeof console)
// console.log(console)

//javascript e dot(.) use kora hoy vitory dhukar jonno


// const url = 'https://jsonplaceholder.typicode.com/users'
// console.log(url)

//arrow
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))


// normal
// fetch(url)
// .then(function(respo){
//       return respo.json()
// })
// .then(function(data){
//       console.log(data)
// })


// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then(res => res.json())
// .then(data => getData(data))

// function getData(users){
//       console.log(users)
// }



// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then(res => res.json())
// .then(data => getData(data))

// function getData(users){
//       for(const user of users){
//             console.log(user)
//       }
// }

// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then(res => res.json())
// .then(data => getData(data))

// function getData(users){
//       for(i=0; i<users.length; i++){
//             console.log(users[i])
//       }
// }



// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then(res => res.json())
// .then(data => getData(data))

// function getData(users){
//       for(const user of users){
//             console.log("Name: "+user.name, "   Username: "+user.username)
//       }
// }



// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then(res => res.json())
// .then(data => getData(data))

// function getData(users){
//       const usersContainer = document.querySelector('.main')
//       // console.log(usersContainer)
//       for(const user of users){
//             console.log(user)
//       }
// }


// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then(res => res.json())
// .then(data => getData(data))

// function getData(users){
//       const usersContainer = document.querySelector('.main')
//       console.log(usersContainer)
//       for(const user of users){
//             console.log(user)
//             const div = document.createElement('div')
//             usersContainer.appendChild(div)
//       }
// }



// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then(res => res.json())
// .then(data => getData(data))

// function getData(users){
//       const usersContainer = document.querySelector('.main')
//       for(const user of users){
//             const div = document.createElement('div')
//             usersContainer.appendChild(div)
//       }
//       console.log(usersContainer)
// }



// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then(res => res.json())
// .then(data => getData(data))

// function getData(users){
//       const usersContainer = document.querySelector('.main')
//       for(const user of users){
//             const div = document.createElement('div')
//             div.innerHTML=`
//                   <h1></h1>
//                   <h2></h2>
//                   <p></p>
//             `
//             usersContainer.appendChild(div)
//       }
//       console.log(usersContainer)
// }




// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then(res => res.json())
// .then(data => getData(data))

// function getData(users){
//       const usersContainer = document.querySelector('.main')
//       for(const user of users){
//             const div = document.createElement('div')
//             div.innerHTML=`
//                   <h1>${user.id}</h1>
//                   <h2>${user.name}</h2>
//                   <p>${user.email}</p>
//             `
//             usersContainer.appendChild(div)
//       }
//       console.log(usersContainer)
// }





const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(res => res.json())
.then(data => getData(data))

function getData(users){
      const usersContainer = document.querySelector('.main')
      for(const user of users){
            const div = document.createElement('div')
            div.classList.add('item')
            div.innerHTML=`
                  <h1>${user.id}</h1>
                  <h2>${user.name}</h2>
                  <p>${user.email}</p>
            `
            usersContainer.appendChild(div)
      }
      console.log(usersContainer)
}