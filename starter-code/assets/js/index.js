// Mobile navigation bar
const showNavEl = document.querySelector('.open');
const hideNavEl = document.querySelector('.close');

const mobileLinksEl=document.getElementById("my-links");


// Main nav bar toggling 
const mainNavEl =document.getElementById("toggle-items")


function showLinks(){
  // create the links again under the header
  mobileLinksEl.style.display="block";
  mobileLinksEl.classList.add('my-links');
  showNavEl.style.display="none";
  hideNavEl.style.display="block";

}
function removeNavLinks(){
  mobileLinksEl.style.display="none";
  mobileLinksEl.classList.remove('my-links');
  showNavEl.style.display="block";
  hideNavEl.style.display="none";
}


showNavEl.addEventListener('click', showLinks );
hideNavEl.addEventListener('click',removeNavLinks);




function toggleBetweenEl() {

  const activePage = mainNavEl.querySelector('.active');


  if (activePage) {
    activePage.classList.remove('active');
  }


  const nextPage = activePage ? activePage.nextElementSibling : mainNavEl.firstElementChild;
  

  if (nextPage) {
    nextPage.classList.add('active');
  }
}

toggleBetweenEl();