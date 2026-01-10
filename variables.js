const accountId = 0906
let accountEmail = "sudhamshasagar@gmail.com"
let accountPassword = "ShriRam@2026"
let city = "Sagara"

// accountId = 7 Not Possible to assign to the constant variable
console.log(accountId);

accountEmail = "elv8.works@gmail.com"
accountPassword = "ShriRam"
accountCity ="Bengaluru"
let state;

console.table([accountId,accountEmail,accountPassword,accountCity,state])

// Using var is not appreciated because of it's block scope and functional scope isssue. It's always recommended to use const and let keyword while declaring
