var main = document.querySelector("#main")
var cur = document.querySelector(".cursor")

main.addEventListener("mousemove",function(e){
    cur.style.left = e.x + "px"
    cur.style.top = e.y + "px"
})