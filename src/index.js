
import * as apiFunctions from './apiFunctions'

let searchBTN = document.querySelector("#searchBTN");
let otherDays = document.querySelector(".other-days")
let today = document.querySelector(".today");
let unit = document.querySelector("#unit");
unit.addEventListener("click",()=>{
    today.innerHTML=" ";
    otherDays.innerHTML=" ";
    if(unit.innerHTML === "C"){
        unit.innerHTML ="F"
        
        apiFunctions.getData()
        apiFunctions.getAPIandDisplayIt();
    }else if (unit.innerHTML === "F"){
        unit.innerHTML ="C"
        apiFunctions.getData()
        apiFunctions.getAPIandDisplayIt();
    }

})
searchBTN.addEventListener("click",()=>{
    today.innerHTML=" ";
    otherDays.innerHTML=" ";
    apiFunctions.getData()
    apiFunctions.getAPIandDisplayIt();

})