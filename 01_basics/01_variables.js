const accountId = 14453
let accountEmail="sheikh@gmail.com"
var accountPassword="12345"
accountCity="rawalpindi"
let accountState;

// accountId =2 //not allowed
accountEmail= "hh@gmail.com"
accountPassword = "1111"
accountCity="islamabad"

/*
prefer not to use var
because issue in block scope and functional scope
*/
console.log(accountId);
 console.table([accountId, accountEmail, accountPassword, accountCity , accountState])