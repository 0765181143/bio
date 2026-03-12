function createBarcode(){

let text=document.getElementById("barcodeText").value

JsBarcode(

"#barcode",
text,
{
format:"CODE128",
width:2,
height:100
}

)

}

function createQR(){

let text=document.getElementById("barcodeText").value

QRCode.toCanvas(

document.getElementById("qr"),
text

)

}
