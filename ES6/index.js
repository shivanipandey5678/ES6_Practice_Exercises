let obj={
    a:10,
    Name:"raj",
    b:function() {
        console.log(this.a, this);
    }
}
// obj.b(); // Output will be: 10 { a: 10, b: [Function: b] }
// //arrow function don't have their own this so it is light weight then normal function;
// let arr=[2,5,7,8];
// for(let x of arr){
//     console.log(x);
// }
// let value=obj.a;
// console.log(value)
let {Name,a}=obj
console.log(Name);
console.log(a);
// fetch('https://reqres.in/api/users/2')
// .then((res)=>{
//     let data=res.json()
//     .then((res)=>{
//      console.log(res.data)
//     })
// })
fetch('https://reqres.in/api/users/2')
.then((res)=>{
    let data=res.json()
     console.log(data)
    
    
})
const user={
    name:"shibu",
    age:8,
    city:'delhi'
}
function print({name,age,city}){
   console.log(name,age,city)
}
print(user)
let color1=["pink","blue"];
let color2=[...color1,"yellow","black"];
console.log(color2)


const user2={
    name:'alexa',
    address:'15th gali no delhi',
    age:78
}
const updateuser={...user2,slary:12345};
console.log(updateuser)


const user3={
    name:"pushpa"
}
const user4={
    name2:"riya"
}
const userofsec2={
  ...user3,...user4,class:7
}
console.log(userofsec2)
// const student={
//     Name:"sneha",
//     class:11,
//     rollno:98,
//     subject:"math"
// }
// const {Name,...x}=student
// console.log("x:",x)
const student = {
    Name: "sneha",
    class: 11,
    rollno: 98,
    subject: "math"
}

const { name, ...x } = student

console.log("x:", x);


let arr2=[2,3,4,5,6];
let sumi=0;
for(let x of arr2){
    sumi+=x;
}
console.log(sumi)


function printArray(...a){
    console.log("elements:",a)
}
printArray(10,23,45)