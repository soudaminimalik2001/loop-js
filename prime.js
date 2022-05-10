var input=require("readline-sync");
num=input.questionInt("enter number:-");
var i=1;
var f=0;
while (i<=num){
    if (num%i==0){
        f+=1
    }
    i++
}
if (f==2){
    console.log(num,"prime number");
}
else{
    console.log(num,"not a prime number");
}