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
 let maxLength = 0; // max characters in a string
 let index = 0; // position of names in the array


 while (index < names.length) {
    let currentLength = names[index].length;
    if (currentLength > maxLength) {
        maxLength = currentLength;
        longestNames = [names[index]];
    } else if (currentLength === maxLength) {
        longestNames.push(names[index]);
    }
    index++;
}

// Output the result
if (longestNames.length === names.length) {
    console.log(`All three names, ${names.join(', ')}, are the same length.`);
} else if (longestNames.length === 1) {
    console.log(`${longestNames[0]} has the longest name.`);
} else {
    console.log(`${longestNames.join(' and ')} tie for the longest name.`);
}




