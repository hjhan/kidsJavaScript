//console.table print array
console.table([[1,2,3,4],['abc','de','f',true]])

//console.table print object arrays
var students = {
    Wang: { name: "XiaoWang", age:34, gender:"Female" },
    Li: {name:"XiaoLi",age:45,gender:"Male"},
    Han: {name:"XiaoHan",age:15,gender:"Male"}
}
console.table(students);
//filter properties
// print multiple columns
console.table(students,["name","age"]);
// print only one column
console.table(students,"name");

var name = "Steve";
var count = 4;
console.log("The %s jumped over %d tall buildings", name, count);

console.log("%c css88.com", "font-size:20pt")

console.log("%c有阴影的log", "text-shadow: 3px 1px 1px grey")

console.error("This is some error message.");