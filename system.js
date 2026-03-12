function openPage(id){

document.querySelectorAll(".page")
.forEach(x=>x.style.display="none")

document.getElementById(id).style.display="block"

}

function saveOrder(code){

let orders=JSON.parse(
localStorage.getItem("orders")||"[]"
)

let o=orders.find(x=>x.code==code)

if(!o){

orders.push({
code:code,
status:"CHUA_LAY",
date:new Date().toLocaleDateString()
})

}else{

o.status="DA_LAY"

}

localStorage.setItem(
"orders",
JSON.stringify(orders)
)

}

function loadOrders(){

let table=document.getElementById("ordersTable")

let orders=JSON.parse(
localStorage.getItem("orders")||"[]"
)

table.innerHTML=""

orders.forEach((o,i)=>{

table.innerHTML+=`

<tr>

<td>${o.code}</td>
<td>${o.status}</td>
<td>${o.date}</td>
<td><button onclick="del(${i})">❌</button></td>

</tr>

`

})

}

function del(i){

let orders=JSON.parse(
localStorage.getItem("orders")
)

orders.splice(i,1)

localStorage.setItem(
"orders",
JSON.stringify(orders)
)

loadOrders()

}

function addManual(){

let code=
document.getElementById("manualCode").value

saveOrder(code)

loadOrders()

}

function loadDashboard(){

let orders=JSON.parse(
localStorage.getItem("orders")||"[]"
)

let da=orders.filter(x=>x.status=="DA_LAY").length
let chua=orders.filter(x=>x.status=="CHUA_LAY").length

new Chart(
document.getElementById("chart"),
{
type:"doughnut",
data:{
labels:["DA LAY","CHUA LAY"],
datasets:[{data:[da,chua]}]
}
})

}

function makeQR(){

let text=
document.getElementById("qrText").value

QRCode.toCanvas(
document.getElementById("qrCanvas"),
text
)

}

function makeBarcode(){

let text=
document.getElementById("qrText").value

JsBarcode("#barcode",text)

}

function printLabel(){

let code=prompt("Code")

JsBarcode("#barcode",code)

window.print()

}

function openMap(){

window.open(
"https://maps.google.com"
)

}
