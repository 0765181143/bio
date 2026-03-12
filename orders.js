function confirmOrders(){

let orders=

JSON.parse(localStorage.getItem("orders")||"[]")

scanned.forEach(code=>{

orders.push({

code:code,
date:new Date().toLocaleDateString(),
status:"CHUA_LAY"

})

})

localStorage.setItem(

"orders",

JSON.stringify(orders)

)

alert("Đã lưu đơn")

scanned=[]

document.getElementById("scanList").innerHTML=""

loadHistory()

updateDashboard()

}
