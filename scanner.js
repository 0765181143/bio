let reader

function startScanner(){

reader = new ZXing.BrowserMultiFormatReader()

reader.decodeFromVideoDevice(
null,
'video',
(result,err)=>{

if(result){

let code=result.text

document.getElementById("scanResult").innerText=code

saveOrder(code)

beep()

vibrate()

loadOrders()
loadDashboard()

}

})

}

function beep(){

let audio = new Audio(
"https://actions.google.com/sounds/v1/cartoon/pop.ogg"
)

audio.play()

}

function vibrate(){

if(navigator.vibrate){

navigator.vibrate(200)

}

}

startScanner()
