/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Define Global Variables
 * 
*/



let allsections = document.querySelectorAll("section");
let navbar= document.getElementById('navbar_list');
let fragment = document.createDocumentFragment();
let newLink =document.querySelectorAll("a");


allsections.forEach((elm , index)=>{
let sectionId = elm.getAttribute('id');
let sectionTitle = elm.getAttribute('data-nav');
let list = document.createElement('li');
let links = document.createElement('a');
  
//construct(li's) 
links.innerText = sectionTitle;
list.appendChild(links);
 list.innerHTML= `<a class="menu__link"  href="#${sectionId}">${sectionTitle}</a>`;
fragment.appendChild(list);
    //list.innerHTML= `<a class="menu__link"  href="#${sectionId}">${sectionTitle}</a>`;

     
// add function of event listener for smooth scrolling
 

list.addEventListener("click",(e)=>{
  
  elm.scrollIntoView({ 
    behavior:"smooth"});
  
    e.preventDefault();
})
    
fragment.appendChild(list);
})
navbar_list.appendChild(fragment);


// function "scroll" and section in scoop 

const active =
   window.addEventListener ("scroll",  ()=>{
  
  allsections.forEach( (section)=> {
  const rect= section.getBoundingClientRect();
  
    if (rect.top > 0 && rect.top < 300){
      
      const nav = section.getAttribute("data-nav");
      allsections.forEach((active)=>{
        active.classList.remove('your-active-class');
      })
      section.classList.add('your-active-class');
// function active link         
    
       const allLinks = document.querySelectorAll("a");
      allLinks.forEach ( (link)=>{

       if (link.innerText == nav) {
         allLinks.forEach ((llink)=>{
          llink.classList.remove('your-active-class');
         })
          link.classList.add('your-active-class');
         }
         
      })
  }
  });
})
 

