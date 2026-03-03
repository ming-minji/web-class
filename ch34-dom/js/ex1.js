document.addEventListener("DOMContentLoaded",function(){
    //문서 끝까지 읽고 난 뒤 한 번 실행되는 소스코드
    const btnClosePopup = document.querySelector(".btn-close-popup")
    const popup = document.querySelector(".popup")
    
    btnClosePopup.addEventListener("click",function(){
        // popup.style.display = "none" 또는 아래 -> 아래는 css랑 같이 사용해야함
        popup.classList.add("hide")
        //popup 클래스리스트에 hide라는 클래스명을 추가하는 것 / css에 .popup.hide라고 추가되어있음
    })
})


