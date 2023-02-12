(()=>{
    let btn =document.querySelectorAll("fa-bars")
    let modal = document.querySelector('.bars-menu-modal')
    document.addEventListener('click',e=>{        
        if(e.target.matches('.fa-bars')){
            modal.classList.toggle("active")
        }
    })
})()