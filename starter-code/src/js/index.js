const showNavEl = document.querySelector('.open');
const hideNavEl = document.querySelector('.close');

const mobileLinksEl=document.getElementById("my-links");

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
