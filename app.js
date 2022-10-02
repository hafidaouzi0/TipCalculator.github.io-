//project 1: make  3 boxes and reset the values counted ineach one
/*let squares=document.querySelectorAll(".squares")

let clearBtn=document.getElementById('clearbtn')

let clickTimes={"red":0,"green":0,"yellow":0}


squares.forEach(square=>
square.onclick=()=>{
clickTimes[square.value]+=1
console.log(square.value)
square.innerText=clickTimes[square.value]}
)



function clearbtn(){
squares.forEach(square=>{
    clickTimes[square.value]=0
    square.innerText=""})
}
clearBtn.onclick=()=>clearbtn()

*/

/*project 2:make a tip calculator for many people
*/

const ourBill=document.getElementById('bill')
const ourTip=document.getElementById('tip')
 const total=document.getElementById("total")
 const Npeople= document.getElementById('people')

let counter = Number(Npeople.innerText)
const increaseP = () => {
    counter  += 1
   Npeople.innerText = counter
calculateBill()
 }

 const decreaseP = () => {
   if(counter<=1) counter=1
   else counter-=1
Npeople.innerText = counter
calculateBill()
 }

function calculateBill(){
total.innerText=((Number(ourBill.value)+(Number(ourTip.value)*
Number(ourBill.value)/100))/counter).toFixed(2)

}



