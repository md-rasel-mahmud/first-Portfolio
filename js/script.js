

// scroll animation function

function animate(selectClass,addClass) {
    window.addEventListener('scroll', function (){
    let header = document.querySelector(selectClass);
    if(this.window.scrollY >= 50){
        header.classList.add(addClass);
    }else{
        header.classList.remove(addClass);
    }
    
})
}

// navigation animation define 
animate('nav','scrolling-active');


// Mobile menu 

let click = document.querySelector(".menubar-click");


click.addEventListener("click", function() {
    
    

    let showMenu = document.querySelector(".menu-item");
    this.querySelector("i").classList.toggle("fa-times");

    showMenu.classList.toggle("showMenubar");

})

// status 

function show(){
    var show = document.querySelector(".success").style.display = "inline-block";
    
}





// Contact information  data


const scriptURL = 'https://script.google.com/macros/s/AKfycbx0DN6OSsVqIhMGWgtjtUufasyMyW5kR-St9L_px4EvyQfna7XPGS9xJkvhQUnEr5yZ/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})