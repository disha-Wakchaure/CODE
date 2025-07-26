let value=0
document.getElementById("inc").addEventListener("click",()=>{
    document.getElementById("count").innerHTML=value ++
})


document.getElementById("dec").addEventListener("click",()=>{
    document.getElementById("count").innerHTML=value --
})

document.getElementById("res").addEventListener("click",()=>{
    document.getElementById("count").innerHTML=value = 0
})
