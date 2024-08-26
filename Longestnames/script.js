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

let len1 = name1.length;
let len2 = name2.length;
let len3 = name3.length;

if (len1 === len2 && len2 === len3) {
    console.log(`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`);
} else if (len1 >= len2 && len1 >= len3) {
    if (len1 === len2 && len1 === len3) {
        console.log(`${name1}, ${name2}, and ${name3} tie for the longest name.`);
    } else if (len1 === len2) {
        console.log(`${name1} and ${name2} tie for the longest name.`);
    } else if (len1 === len3) {
        console.log(`${name1} and ${name3} tie for the longest name.`);
    } else {
        console.log(`${name1} has the longest name.`);
    }
} else if (len2 >= len3) {
    if (len2 === len3) {
        console.log(`${name2} and ${name3} tie for the longest name.`);
    } else {
        console.log(`${name2} has the longest name.`);
    }
} else {
    console.log(`${name3} has the longest name.`);
}

