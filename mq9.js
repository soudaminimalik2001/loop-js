var input=require("readline-sync");
sum=0
for (i=1;i<=10;i++){
    num=input.questionInt("enter number:-");
    sum+=num
}
console.log(sum);