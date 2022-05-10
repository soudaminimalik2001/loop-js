var input=require("readline-sync");
n=input.questionInt("enter number:-");
for (i=1;i<=10;i++){
    b=i*n
    console.log(n+'*'+i+'='+b);
}