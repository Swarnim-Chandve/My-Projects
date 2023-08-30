var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var flag = 0
var opop = document.querySelector("#op");
var lob = document.querySelector("i");


btn.addEventListener("click",function(){
    if(flag == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = 1
    }
    else{
        istatus.innerHTML = "Strangers"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0
    }
})



opop.addEventListener("dblclick",function(){
    lob.style.transform = 'translate(-50%,-50%) scale(1)';
    lob.style.opacity = 0.8;
    setTimeout(function(){
        lob.style.opacity = 0;
    },1000)
    setTimeout(function(){
        lob.style.transform = 'translate(-50%,-50%) scale(0)'
    },2000);
})