//Modules are files that export functions or variables to other files

//We use import {  } to import from a module, and export { } to export from the module to other files

//We need to have a package.json file with this code:
//  {
//      "type": "module"
//  }

//import { a, f1, f2 } from "./math.js"
//import { pi, Sum, Prod } from "./math.js"
//import { pi as someValue, Sum, Prod } from "./math.js"
import * as Math from "./math.js"

//console.log(a)
//console.log(f1(1, 2))
//console.log(f2(2, 3))

//console.log(pi)
//console.log(Sum(1,2))
//console.log(Prod(2, 3))

//console.log(someValue)

console.log(Math.pi)
console.log(Math.Sum(1,2))
console.log(Math.Prod(2, 3))
