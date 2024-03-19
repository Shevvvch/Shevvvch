const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const greet = name => `Hello, ${name}!`;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
let array = getRandomArray(); array.forEach(item => console.log(item));
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
99 + 86
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
banana

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

banana

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
false - grape
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// This is a comment
