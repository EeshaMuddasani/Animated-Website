let lake = document.getElementById('lake');
let lilypads_bottom = document.getElementById('lilypads_bottom');
let lilypads_top = document.getElementById('lilypads_top');
let algae = document.getElementById('algae');
let ship = document.getElementById('ship');
let fx = document.getElementById('fx');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    lake.style.top = value * .8 + 'px';
    ship.style.left = value * .2 + 'px';
    fx.style.left = value * .2 + 'px';
    algae.style.top = value * .15 + 'px';
    lilypads_bottom.style.top = value * .2 + 'px';
    lilypads_top.style.top = value * -.15 + 'px';
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));