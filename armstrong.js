let input=require("readline-sync")
let num=input.question("enter no")
let sum=0
let num1=num 
while(num>0){
      let digit=(num%10)*(num%10)*(num%10)
      sum=sum+digit
      num=Math.floor(num/10)

}
if (num1==sum){
   console.log(num1," is a armstrong")
}
else{
   console.log(num1,"it is not a armstrong")
}
