// // // hello();
// // // function hello(){
// // //     console.log("Hello  World0");
// // // }
// // let varchar="Hello";
// // console.log(typeof(varchar));
// // let age=25;
// // let=3.14;
// // let student=true;
// // let unndefinedvar;
// // console.log(typeof(unndefinedvar));
// // let person={
// //     name:"Alice",
// //     age:30,
// //     isstudent:false,
// // };
// // console.log(person.name);
// // console.log(person.age);
// // let fruits=[1,"banana","apple"];
// // console.log(fruits[0]);
// // function add(a,b){
// //     return a+b;

// // }
// // var a=add(5,3);
// // console.log(a);
// // // tyoe coercion;
// let x=5 ;
// let y= 7;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// let p= true;
// let q= false;
// console.log(p&&q);
// console.log(p||q);
// console.log(!p);
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// let count=0;
// while(count <5){
//     console.log(count);
//     count++;
// }
 let count1=0;
 do{
     console.log(count1);
     count1++;
 }while(count1 <5);
let person={name:"Chotu",age:20,occupation:"chai"};
for(let key in person){
    console.log(key +":"+person[key]);

}
let car={
    make:"Toyota",
    model:"Cmary",
    year:2022,
    iselectric: false,
    start:function(){
        console.log("Engine started");
    }
};
console.log(car.make);
console.log(car.year);
car.start();