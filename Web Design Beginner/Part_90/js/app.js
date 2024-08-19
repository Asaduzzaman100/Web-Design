// fetch(`https://restcountries.com/v3.1/all`) dynamic korty chile backtic``

fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => allCountries(data)) //array

function allCountries(countries){
    // console.log(countries)
    // for(const country of countries){
    //     console.log(country)
    // }

    // console.log(countries)
    // countries.map(country => console.log(country))
    // countries.map((country,i) => console.log(i,country))

    // countries.forEach(country => console.log(country))
}


