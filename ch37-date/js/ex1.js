document.addEventListener("DOMContentLoaded",function(){
    const clock = document.querySelector(".clock") 
    const buttonDay = document.querySelector("#day-mode")
    const buttonNight = document.querySelector("#night-mode")
    
    buttonDay.addEventListener("click",function(){
        clock.classList.add("day")
        clock.classList.remove("night")
    })

    buttonNight.addEventListener("click",function(){
        clock.classList.add("night")
        clock.classList.remove("day")
    })

    let arrayMonth = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]
    let arrayDay = ["일","월","화","수","목","금","토"]
    const onday = document.querySelector(".onday")
    const ontime = document.querySelector(".ontime")

    function showTime(){
        let now = new Date()
        let month = now.getMonth()
        let date = now.getDate()<10?"0"+now.getDate():now.getDate()
        let day = now.getDay()
        let hour = now.getHours()<10?"0"+now.getHours():now.getHours()
        let minute = now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes()
        let second = now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds()
        onday.innerHTML = `${arrayMonth[month]} ${date}일 ${arrayDay[day]}요일`
        ontime.innerHTML = `${hour}:${minute}:${second}`
        if(getDayOrNight()=="낮"){
            clock.classList.remove("night")
            clock.classList.add("day")
        }else{
            clock.classList.remove("day")
            clock.classList.add("night")
    }
    }
    
    showTime()
    setInterval(showTime,1000)

    //오전 9시 40분 ~ 오후 6시 10분 -> 낮
    //이게 아니면 모두 밤이라고 설정
    function getDayOrNight(){
        let now = new Date()
        let hours = now.getHours() // 0 ~ 23
        let minutes = now.getMinutes() // 0 ~ 59
        if((hours>9 && hours<18 || (hours==9 && minutes>=40)) || (hours==18 && minutes<10)){
            return "낮"
        }else{
            return "밤"
        }
    }
    console.log(getDayOrNight())
    if(getDayOrNight()=="낮"){
        clock.classList.add("day")
    }else{
        clock.classList.add("night")
    }
})