//아래에 document.addEventLister("DOMCContentLoaded",function(){}을 하고 {안에 코드를 다 넣으면 실행됨})
document.addEventListener("DOMContentLoaded",function(){
    const btn1 = document.querySelector("#btn1")
    //태그를 저장하는 표현은 스크립트보다(태그를 생성한 후에) 아래에 적어줘야 함
    btn1. addEventListener("click",function(){
        alert("안녕하세요")
    }) //어떠한 행동을 했을 때~(트리거), 동작(이름없는 함수)?

    const btn2 = document.querySelector("#btn2")
    const box = document.querySelector(".box")
    btn2.addEventListener("click",function(){
        box.style.backgroundColor = "lime"
    })

    const btn3 = document.querySelector("#btn3")
    btn3.addEventListener("click",function(){
        box.style.backgroundColor = "initial" //또는 "none"
    })

    const originFontSize = 20  //const로 하면 이후에 다른 값으로 교체될 수 없음 / 상수형변수 만들 때 사용
    let basicFontSize = 20
    let minFontSize = 14
    let maxFontSize = 26
    const chip = document.querySelector(".chip")
    const btnSmallFont = document.querySelector("#btn-small-font")
    const html = document.querySelector("html")

    btnSmallFont.addEventListener("click",function(){
        if(basicFontSize<=minFontSize){
            alert(minFontSize+ "픽셀 보다 작게 글씨를 줄일 수 없습니다.")
            return
        }
        basicFontSize-=1
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })
    const btnBigFont = document.querySelector("#btn-big-font")
    btnBigFont.addEventListener("click",function(){
        if(basicFontSize>=maxFontSize){
            alert(maxFontSize+"픽셀 보다 크게 글씨를 키울 수 없습니다.")
            return
        }
        basicFontSize +=1
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })

    const btnFontBase = document.querySelector("#btn-font-base")
    btnFontBase.addEventListener("click",()=>{
        html.style.fontSize = originFontSize+"px" // <-20px로 쓴 것과 같음
        chip.innerHTML = `${originFontSize}px`
        basicFontSize = originFontSize
    })

})