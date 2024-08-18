const accountId = 970850; //const can't be modified
let accountEmail = "samarjeeet@gmail.com"; //let can be modified
var accountPassword = "12345"; //var can be modified
accountCity = "Jaipur"; //this can't be modified
let accountState; //it will be undefined
// accountId = 12345
accountEmail = "utsav@gmail.com";
accountPassword = "00000";
accountCity = "kolkata";
console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
prefer not to use var because of issue in block scope and functional scope
*/
