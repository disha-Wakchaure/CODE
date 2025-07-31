function addTask(){
    let input=document.getElementById("input")
    console.log(input);
    let contentTask=input.value
  if(contentTask !==""){
    let li=document.createElement("li")
    document.getElementById("list").appendChild(li)
    li.textContent=contentTask
    input.value=""
    let DeleteBtn=document.createElement("button")
    li.appendChild(DeleteBtn)
    DeleteBtn.innerHTML="Remove"
    DeleteBtn.style.marginLeft="30px"
    DeleteBtn.addEventListener("click",()=>{
        li.remove()
    })
  }    
}
document.getElementById("btn").addEventListener("click",addTask)