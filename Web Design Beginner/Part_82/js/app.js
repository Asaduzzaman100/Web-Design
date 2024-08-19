
      // arrow function
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))


      // normal function
// function fetchData() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//       .then(function(response) {
//           return response.json();
//       })
//       .then(function(json) {
//           console.log(json);
//       })
//       .catch(function(error) {
//           console.error('Error fetching data:', error);
//       });
// }

// fetchData();
    

