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

////////////////////////////
//Toggle search bar /mobile

const searchMobile = document.querySelector('.mob-search-icon')
const removeSeacrh = document.querySelector('.mob-search-rem')
const searchInput = document.querySelector('.mob-search-text')

const searchBar = document.querySelector('.mob-search-text')
const searchBarIcon = document.querySelector('.plus')

const searchBarclose = document.querySelector('.mob-search-rem')

const mobileNav = document.querySelector('.mobile-nav')


const classToggler = ()=>{
  removeSeacrh.classList.toggle('hidden')
  searchMobile.classList.toggle('hidden')
  searchBar.classList.toggle('hidden')
  searchBarIcon.classList.toggle('hidden')
  
}
searchMobile.addEventListener('click', ()=>{
  classToggler();

  mobileNav.classList.add('active')
  mobileNav.classList.remove('nav-linear')
  

})

searchBarclose.addEventListener('click', ()=>{
  classToggler()
  mobileNav.classList.remove('active')
  mobileNav.classList.add('nav-linear')
})

///mobile nav sticky



/////footer accordion

new Accordion('.accordion-container');







/////////////////////////////
//mobile nav sticky
let waypoint = new Waypoint({
  element: mobileNav,
  handler: function(direction) {

    if(direction === 'down'){

      mobileNav.classList.add('scrolled2')
      mobileNav.classList.remove('nav-linear')
      
    }else{
      mobileNav.classList.remove('scrolled2')
      mobileNav.classList.add('nav-linear')
    }
  },
  offset: -10
})


