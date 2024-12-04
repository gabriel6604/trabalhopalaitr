const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function slider(){
    contador++;

    if(contador > imagens.length - 1){
        contador = 0;       
    }

    box.style.transform = `translateX(${-contador * 100}%)`;
}
setInterval(slider, 3000);


const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const body = accordion.querySelector('.accordion-body');
            body.classList.toggle('active');
        })
        
})