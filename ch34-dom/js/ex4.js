document.addEventListener("DOMContentLoaded",()=>{

    const btnNext = document.querySelector("#btn-next")
    const btnPrev = document.querySelector("#btn-prev")
    const train = document.querySelector(".train")
    let count = 0
    let slides = train.children.length //리스트의 개수
    train.style.width = `${100*slides}`

    btnNext.addEventListener("click",()=>{
        count++
        if(count>slides-1){count=slides-1}
        //train클래스가 왼쪽으로 1000픽셀씩 이동 -> 두 개가 이동이면 2천픽셀씩 이동된 것
        train.style.transform = `translateX(${-(100/slides)*count}%)`
    })

    btnPrev.addEventListener("click",()=>{
        count--
        if(count<0){count=0}
        train.style.transform = `translateX(${-(100/slides)*count}%)`
    })
})