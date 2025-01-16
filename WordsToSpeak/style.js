let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let text = document.getElementById("text").value
    let speech = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(speech)
})