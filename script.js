const add = document.querySelector('.add')
const minus = document.querySelector('.minus')
const input = document.querySelector('.quantity-field input')

add.addEventListener('click',()=>{
    input.value++
    
})

minus.addEventListener('click',()=>{
    input.value--
})