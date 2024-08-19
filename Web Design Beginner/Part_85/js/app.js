// const url = 'https://jsonplaceholder.typicode.com/photos'

// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))



// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then(res => res.json())
// .then(data => getData(data))

// function getData(users){
//       const usersContainer = document.querySelector('.main')
//       for(const user of users){
//             const divv = document.createElement('div')
//             divv.classList.add('item')
//             divv.innerHTML=`
//                   <h1>${user.id}</h1>
//                   <h2>${user.name}</h2>
//                   <p>${user.username}</p>
//                   <button onclick="getId(${user.id})">Show Details</button>
//             `
//             usersContainer.appendChild(divv)
//       }
// }

// function getId(id){
//       console.log(id);
// }




const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(res => res.json())
.then(data => getData(data))

function getData(users){
      const usersContainer = document.querySelector('.main')
      for(const user of users){
            const divv = document.createElement('div')
            divv.classList.add('item')
            divv.innerHTML=`
                  <h1>${user.id}</h1>
                  <h2>${user.name}</h2>
                  <p>${user.username}</p>
                  <button onclick="getId(${user.id})">Show Details</button>
            `
            usersContainer.appendChild(divv)
      }
}

function getId(id){
      const url = `https://jsonplaceholder.typicode.com/users/${id}`
      console.log(url)
}
// window.location='https://facebook.com'