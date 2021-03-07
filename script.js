const loveMe = document.querySelector(".loveMe")
const time  = document.querySelector(".time")
let likes = 0 ;
let clickTime = 0
loveMe.addEventListener("click", (e)=>{
    if(clickTime === 0){
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime) < 800){
            clickTime = 0
            likes = ++likes
            craeteHeart(e)
        }else{
            clickTime = new Date().getTime()
        }
    }
})

function craeteHeart(e){
    const heart = document.createElement("i")
    heart.className = "fas fa-heart"

    const x = e.clientX
    const y = e.clientY
    const loveMeTop = e.target.offsetTop
    const loveMeLeft = e.target.offsetLeft
    const xInside = x - loveMeLeft
    const yInside = y - loveMeTop

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    loveMe.appendChild(heart)
    time.innerText = +likes

    setTimeout(()=>{
        heart.remove()
    },560)
}