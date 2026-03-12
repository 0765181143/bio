function updateDashboard(){

let orders=

JSON.parse(localStorage.getItem("orders")||"[]")

let today=new Date().toLocaleDateString()

let todayOrders=

orders.filter(o=>o.date==today)

let ctx=document.getElementById("chart")

new Chart(ctx,{

type:"bar",

data:{

labels:["Hôm nay","Tổng đơn"],

datasets:[{

label:"Đơn",
data:[todayOrders.length,orders.length]

}]

}

})

}

updateDashboard()
