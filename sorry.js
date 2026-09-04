const $btn_sorry = document.getElementById("sorry");

$btn_sorry.addEventListener('click',()=>{
    const Yippe = document.createElement("h3")
    Yippe.textContent ="ต้าวยกโทษให้แล้วดีใจจัง"

    document.body.appendChild(Yippe)
    
})