const add = document.querySelector('.add')
const minus = document.querySelector('.minus')
const input = document.querySelector('.quantity-field input')
const mobileCategory = document.querySelector('.mobile-product-category')
const dropdown = document.querySelector('.mobile-product-category .container')

if (add) {    
    add.addEventListener('click',()=>{
        input.value++
        
    })
}

if (minus) {
    minus.addEventListener('click',()=>{
        input.value--
    })
    
}


if (mobileCategory && dropdown) {
    mobileCategory.addEventListener('click', (event) => {
    dropdown.classList.toggle('active');
    const categoryDisplayText = document.querySelector('.category-display-text')
    const categoryItems = document.querySelectorAll('.mobile-product-category .container span')
        console.log(categoryItems);
        
    
    categoryItems.forEach((item) => {
        item.addEventListener('click', () =>{
            categoryDisplayText.innerText = item.innerText
            console.log('clicked');
            
        })
    });
});
}


