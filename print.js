function printLabel(){

let code=document.getElementById("printCode").value

let w=window.open()

w.document.write(`

<style>

@page{
size:100mm 150mm;
margin:0;
}

body{
font-family:Arial;
text-align:center;
}

</style>

<h2>Sprinter by C.Cường</h2>

<svg id="b"></svg>

`)

w.document.close()

setTimeout(()=>{

JsBarcode(

w.document.querySelector("#b"),
code,
{
format:"CODE128",
width:2,
height:100
}

)

w.print()

},500)

}
