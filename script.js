var endate="25 November 2023 05:32 AM";
document.querySelector(".end-date").innerHTML=endate;
const inputs=document.querySelectorAll("input");
const myfun=()=>{
var startdate=new Date(endate);
var now=new Date();
var diff=(startdate-now)/1000;
console.log(diff);
if(diff<0) return;
// convert it into days
inputs[0].value=Math.floor(diff/3600/24);
inputs[1].value=Math.floor(diff/3600)%24;
inputs[2].value=Math.floor(diff/60)%60;
inputs[3].value=Math.floor(diff)%60;
}
setInterval(()=>{ 
    myfun();

},1000  
)
