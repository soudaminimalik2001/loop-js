var input=require("readline-sync");
n=input.question("enter name: ")
var a=n;
var s=""
// console.log(store);
for (let i=n.length-1;i>=0;i--) {
   s=s+n[i]
}
if (a===s) {
   console.log("its palindrome string")
}
else {
   console.log("it's not a palindrome string")
}
