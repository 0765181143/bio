let scanned=[]
let reader

function notify(t){

let n=document.getElementById("notify")

n.innerText=t

n.style.display="block"

setTimeout(()=>{

n.style.display="none"

},1500)

}

function beep(){

let audio=new Audio(
"https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg"
)

audio.play()

}

function vibrate(){

if(navigator.vibrate){

navigator.vibrate(200)

}

}

async function startScanner(){

reader=new ZXing.BrowserMultiFormatReader()

const video=document.getElementById("video")

const devices=await reader.listVideoInputDevices()

reader.decodeFromVideoDevice(

devices[0].deviceId,
video,

(result,err)=>{

if(result){

let code=result.text

if(!scanned.includes(code)){

scanned.push(code)

let li=document.createElement("li")

li.innerText=code

document.getElementById("scanList").appendChild(li)

notify("Quét thành công "+code)

beep()

vibrate()

}

}

}

)

}

async function toggleFlash(){

let video=document.getElementById("video")

let stream=video.srcObject

if(!stream)return

let track=stream.getVideoTracks()[0]

let cap=track.getCapabilities()

if(cap.torch){

await track.applyConstraints({

advanced:[{torch:true}]

})

}

}
