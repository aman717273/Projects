// // function Book (title,author,year){
// //     this.title=title;
// //     this.author=author;
// //     this.year=year;
    
// // }
// // let book1= new Book("The Catcher in the Rye","J.D.Salinger",1951);
// // let book2=new Book("to kill a Mockingbird","Harper Lee",1960);
// console.log(book1.author)
let fruits=["apple","banana","orange","grapes"];
console.log(fruits[0]);
console.log(fruits[2]);
fruits.push("kiwi");
console.log(fruits);
fruits.unshift("mango");
console.log(fruits);
let removedlast=fruits.pop();
let removedfirst=fruits.shift();
let indexoforange=fruits.indexOf("orange");
for(let i=0;i<fruits.length;i++){
console.log(fruits[i]);
}
let citrus=fruits.slice(1,3);
console.log(citrus);
let removed=fruits.splice(1,2,"pear","melon");
let morefruits=["grapefruits","piineaple"];
let allfruits=fruits.concat(morefruits);
const multiply=function(a,b){
    return a*b;
};
const product=multiply(4,6);
console.log("Function expression-prodcut",product);
const subtract =(a,b)=>a-b;
const diff=subtract(8,3);
console.log("Arrow Function ",diff  );
const delayedfunction=()=>{
    console.log("Delayed function executed!");

};
console.log("abaaaaaba");

setTimeout(delayedfunction,2000);
console.log("abbsss");
function repeatedfunction(){
    console.log("Executing");
}
const intervalId=setInterval(repeatedfunction,1000);
setTimeout(()=>{
    clearInterval(intervalId);
    console.log("Interval stopped");
},5000);