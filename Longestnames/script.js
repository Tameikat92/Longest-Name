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



if (length1 === length2 && length3 === length3) {
    console.log(`${names} have the same length`);
} else if (length1>= length1 && length1 >= length3) {
    if (length1 === length1 && length1 === length3) {
        console.log(`${names} tie for the longest name.`);
    } else if (length1 === length2) {
        console.log(`${name1} and ${name2} tie for the longest name.`);
    } else if (length1 === length3) {
        console.log(`${name1} and ${name3} tie for the longest name.`);
    } else {
        console.log(`${name1} has the longest name.`);
    }
} else if (length2 >= length3) {
    if (length2 === length3) {
        console.log(`${name2} and ${name3} tie for the longest name.`);
    } else {
        console.log(`${name2} has the longest name.`);
    }
} else {
    console.log(`${names[2]} has the longest name.`); // using index number from array
}

