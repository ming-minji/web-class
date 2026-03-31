document.addEventListener("DOMContentLoaded",()=>{
    const btnTop = document.querySelector(".btn-top")
    btnTop.addEventListener("click",()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    })
    // 이 기능은 항상 똑같게 쓰기 때문에 거의 복붙해서 쓰면 됨 .btn-top 저것만 변경해서 맞추면 됨

    const gnb = document.querySelector(".gnb")

    let lastScrollTop = 0
    window.addEventListener("scroll",()=>{
        //스크롤바가 움직일 때 실행될 소스코드
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        //호환성을 위해서 만들어 놓은 소스코드

        if(scrollTop < lastScrollTop){
            console.log("마우스 휠 위로 올림")
            gnb.classList.add("on")
            btnTop.classList.add("on")
        }else{
            console.log("마우스 휠 아래로 내림")
            gnb.classList.remove("on")
            btnTop.classList.remove("on")
        }
        lastScrollTop = scrollTop
    })

})



