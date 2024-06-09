
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
console.log(countEl)
let count =0
function increment(){
//console.log("clicked")
count=count+1
countEl.innerText=count
}
function save(){
    
    
    let savingS= count+ "-"
    saveEl.textContent+= savingS //we use .textContent instead of innerText to get equal spaces after each save
    countEl.textContent = 0
    count=0
}
