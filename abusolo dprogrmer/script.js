const bodyEl = document.querySelector("body");
const menuBtnEl = document.querySelector(".icon");
const navlinkeEl = document.querySelector(".nav-link");
const navbarEl = document.querySelector(".navebar");
const homeEl = document.querySelector(".about");
const infoEl = document.querySelector(".home");
const navlinks = document.querySelectorAll('header nav a');
const sections =document.querySelectorAll('section');

const aboutEL = document.querySelector(".homes");
const aboutinfoEl = document.querySelector(".abouts");


const prevEl = document.querySelector(".prev")
const nextEl = document.querySelector(".next")
const skillEl = document.querySelector(".skills-details")
const cardEl = document.querySelectorAll(".card")
currentCard = 1

updateCards()

nextEl.addEventListener("click", ()=>{
    currentCard++;
    updateCards();
    console.log("clicked")

}
)
prevEl.addEventListener("click", ()=>{
    currentCard--;
    updateCards();
    console.log("cliked")
})

 function updateCards(){
    if(currentCard > cardEl.length){
        currentCard = 1;
    }else if(currentCard < 1){
        currentCard = cardEl.length;
    }
    skillEl.style.transform = `translateX(-${(currentCard -1)*700}px)`;
    setTimeout(()=>{
        // currentCard++;
        updateCards()
    },3000)
    
    
 }

window.addEventListener("scroll",()=>{
    navbarEl.classList.toggle("active", window.scrollY > 100)

    

})

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.add("active");
                document.querySelector('header nav a[ href*=' + id + ']').classList.add("active");
               
              
            })

        }
    })
 
    
}
menuBtnEl.addEventListener("click", ()=>{ 
    navlinkeEl.classList.add("active");
   
    


})


