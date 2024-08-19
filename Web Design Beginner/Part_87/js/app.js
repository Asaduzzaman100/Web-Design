// // normal object
// const user = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
// }
// console.log(user);


// convert normal object to json
const user = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
  }
  const convertJson = JSON.stringify(user);
  console.log(convertJson);
  console.log(JSON.parse(convertJson)); //convert json to normal object
  
  
