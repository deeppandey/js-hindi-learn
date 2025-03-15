const account_Id = 2324
let accountEmail = "dguru0661362@gmail.com"
var accountPassword = "12345"
accountCity = "Moradabad"
let accountState;

//account_Id = 2 // not allowed
accountEmail = "demo@gmail.com"
accountPassword = "325255"
accountCity = "Gurgaon"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(account_Id);

console.table([account_Id, accountEmail, accountPassword, accountCity, accountState])