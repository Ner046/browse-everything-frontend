const hamburgerButton = document.querySelector(".mobile-nav-toggle")
const primaryNav = document.querySelector(".primary-navigation")
const reveals = document.querySelectorAll('.reveal')


hamburgerButton.addEventListener("click", ()=>{
        primaryNav.hasAttribute('data-visible')
        ?hamburgerButton.setAttribute('aria-expanded',false)
        :hamburgerButton.setAttribute('aria-expanded',true)
        primaryNav.toggleAttribute('data-visible')
})

const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
                if (entry.isIntersecting){
                        entry.target.classList.add ('active')
                }
        })
        
})

reveals.forEach(el => observer.observe(el))