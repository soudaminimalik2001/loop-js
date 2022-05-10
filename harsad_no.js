var input=require("readline-sync");
num=input.questionInt("enter number");
var num1=num
var r=0;
while (0<num){
    var r=(r*10)+num%10
    var num=Math.floor(num/10);
    var b=r+num

}
if (num%b==0){
    console.log(num1,"harshad number");
}
else{
    console.log(num1,"not a harshad number");
}