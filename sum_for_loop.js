var input=require("readline-sync");
var start_num=input.questionInt("enter start number:");
var end_num=input.questionInt("enter end number:");
var i=start_num;
var sum=0;
var sum1=0;
for ( var i=start_num;i<end_num;i++){
    if (i%2==0){
        sum+=i
    }
    else if (i%2==1){
        sum1+=i
    }
}
console.log(sum);
console.log(sum1);