document.addEventListener("DOMContentLoaded",()=>{
    const tabs = document.querySelectorAll(".tabs>span")
    const tabDescriptions = document.querySelectorAll(".tab-descriptions>section") 

    tabs.forEach(function(span,i){  //i는 순번을 나타냄(0,1,...) 
        span.addEventListener("click",function(){
            tabs.forEach(tab=>tab.classList.remove("active"))
            //위 해석=> 일단 3개의 span태그에 있는 active 태그를 다 지운다.
            span.classList.add("active")
            //위 해석=> 내가 클릭한 span태그에만 active라는 클래스가 추가됨
            tabDescriptions.forEach(section=>section.classList.remove("active"))
            tabDescriptions[i].classList.add("active")
        })
    })
})  
//span태그 3개를 감싸는 tabs는 배열, 3번 반복, 1번,2번,3번째 span태그한테 function(){}동작이 실행된다는 것 -> 축약된거라 축약 전 보고싶으면 쌤 깃허브 보기


//forEach는 배열 전문 함수 / forEach는 배열 원소에 무언가를 하고 싶을 때 사용함
//인자는 항상 익명함수(동작)이어야 함
//i옆에 있는 fruits 자리는 첫 번째 매개변수로 내가 맘대로 이름 지으면 됨, 배열의 원소를 가리킴
//i는 두 번째 매개변수로 각각의 원소의 순번을 뜻함


let fruits = ["사과","바나나","배"]
fruits.forEach(function(fruits,i){
    console.log(fruits)
    console.log(i)
})