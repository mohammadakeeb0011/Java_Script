const accountId = 144553                //constant
let accountEmail = "example@gmail.com"  // automatic variable
var accPassword = "12345"               // static variable
accCity = "Jaipur"                      // string

// accountId = 2 // not allowed

accountEmail = "xyz@gmail.com"
accPassword = "121212121"
accCity = "khan"

/* 
Preffer not to use var
because of issue in block scope
*/
console.table([accountId, accountEmail, accPassword, accCity])