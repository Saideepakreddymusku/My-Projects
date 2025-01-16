setInterval(()=>{
     let hour = document.querySelector("#hourValue")
     let minute = document.querySelector("#minValue")
     let second = document.querySelector("#secondValue")

     let currenthour = new Date().getHours()
     let currentminute = new Date().getMinutes()
     let currentseconds = new Date().getSeconds()

     // hour.innerHTML= currenthour
     // minute.innerHTML = currentminute
     // second.innerHTML = currentseconds
     currentsec <10 
? (sec.innerHTML=`0${currentsec}`)
: (sec.innerHTML=currentsec)

currentmin <10 
? (min.innerHTML=`0${currentmin}`): (min.innerHTML=currentmin)

currenthour > 12
? (hour.innerHTML= currenthour -12): (hour.innerHTML=currenthour)
},1000)