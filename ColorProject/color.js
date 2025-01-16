let GENERATECOLOR=()=>{
    let red=Math.trunc(Math.random()*255)
    let green=Math.trunc(Math.random()*255)
    let blue=Math.trunc(Math.random()*255)
    let finalcolor=`rgb(${red},${green},${blue})`
    let body=document.body
    body.style.background=finalcolor
}