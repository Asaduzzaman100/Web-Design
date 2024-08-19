fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => allCountries(data)) //array

function allCountries(countries){
    const countryContainer = document.querySelector('.main')
    for(country of countries){
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('item')
        div.innerHTML=`
        <h1>Name: ${country.name.common}</h1>
        <h2>Capital: ${country.capital}</h2>
        <p>Population: ${country.population}</p>
        <button onclick="getDetailsData('${country.cca2}')"> Details ${country.cca2}</button>
        `
        countryContainer.appendChild(div)
    }
}
function getDetailsData(code){
    // console.log(code)
    // const url = `https://restcountries.com/v3.1/alpha/co`
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data))
}
function showDetails(data){
    // console.log(data)
    // console.log(data[0])
    const details = document.querySelector('.details')
    const div = document.createElement('div')
    div.innerHTML=`
        <img src="${data[0].flags.png}" alt="">
        <h1>Name: ${data[0].name.common}</h1>
        <h2>Capital: ${data[0].capital}</h2>
        <p>Population: ${data[0].population}</p>
        `
    // details.appendChild(div)
    details.replaceChildren(div)
    // console.log(data[0])
    // console.log(data[0].name.common)
}

// population
// cca2
