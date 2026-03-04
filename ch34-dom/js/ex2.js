//this -> 문서 밖에 있는 this가 가리키는건 최상위 객체인 window임
//표현은 ~태그에 바인딩 되어있다(묶여있다)

document.addEventListener("DOMContentLoaded",function(){
    console.log(this) 
    //얘가 가리키는건 document
    //!! 위에 function(){}이면 document가 되지만, 화살표함수 ()=>{}이면 묶이지 않아서 그 위의 객체인 window에 묶이게 된다. -> 묶이는게 없으면 묶일 때까지 위로 올라감!! 
    const btnNo = document.querySelector(".btn-no")
    const popup = document.querySelector(".popup")
    const modal = document.querySelector(".modal")

    btnNo.addEventListener("click",function(){
        popup.classList.add("blind")
        modal.classList.add("blind")
    })

    modal.addEventListener("click",function(){
        // console.log(this) -> 모달 태그에 바인딩 되어있다
        popup.classList.add("blind")
        modal.classList.add("blind")
    })
})