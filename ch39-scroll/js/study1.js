document.addEventListener("DOMContentLoaded",()=>{
    const currentCount = document.querySelector("#current-count")
    const rotateBox = document.querySelector(".rotate-box")

    window.addEventListener("scroll",()=>{
        //스크롤바가 움직일 때 실행되는 소스코드
        let distance = window.scrollY
        currentCount.innerHTML = distance
        rotateBox.style.transform = 'rotate(${distance/2}deg)'

        if(distance>=600){
            
        }
    })
})
