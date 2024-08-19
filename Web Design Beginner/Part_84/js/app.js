const url = 'https://jsonplaceholder.typicode.com/photos'
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
                  <img style="width: 100%;" src="${user.url}" alt="">
                  <img style="width: 50%;" src="${user.thumbnailUrl}" alt="">
            `
            usersContainer.appendChild(divv)
      }
}
