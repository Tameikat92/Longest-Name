document.write("Longest Names Homework")

let name1 = "Kendrick Lamar"
let name2 = "Oprah Winfrey"
let name3 = "Beyonce Knowles"

let length1 = name1.length;
let length2 = name2.length;
let length3 = name3.length;

console.log(length1)
console.log(length2)
console.log(length3)

//Array of my names from my variables above
let names = [[name1],[name2],[name3]];
 console.log(names)

 let longestNames = [];
 let maxCharcacters = 0; // max characters in a string
 let index = 0; // position of names in the array

 while (index < names.length) {
let currentCharacter = names[index].length; {
    if (currentCharacter > maxCharcacters) {
        maxCharcacters = currentCharacter;
        longestNames = names[index].length;
    }
}

 }





