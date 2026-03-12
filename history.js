function loadHistory(){

let orders=

JSON.parse(localStorage.getItem("orders")||"[]")

let list=document.getElementById("historyList")

list.innerHTML=""

orders.forEach(o=>{

let li=document.createElement("li")

li.innerText=o.code+" - "+o.date

list.appendChild(li)

})

}

loadHistory()
