//sign in logic

const signIn = document.querySelector('.sign-in')
const signUp = document.querySelector('.sign-up')
const header = document.querySelector('.header')
const card = document.querySelector('.card-num')

signIn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('clicked');
    header.classList.toggle('active')
    signUp.classList.toggle('active')
    card.classList.toggle('active')
    signIn.classList.toggle('active')

    if(signIn.classList.contains('active')){

        signIn.innerHTML = 'Hi, Angela!'
    }else{
        signIn.innerHTML = 'Sign in'
    }
    
})


//Sticky on scroll



const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".top-nav");

const sectionOneOptions = {
  rootMargin: "-20px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        nav.classList.add("scrolled");
        document.getElementById("navigation").className += " scrolled";
    } else {
        nav.classList.remove("scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

