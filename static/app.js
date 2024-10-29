
function startLoader() {

    document.documentElement.style.overflow = 'hidden';
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue === 100) {
            // После завершения загрузки прелоадера, разблокируем скролл
            document.documentElement.style.overflow = '';
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue + '%';

        let delay = Math.floor(Math.random() * 100) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

startLoader();


gsap.to(".counter", 0.5, {
    delay: 2.7,
    opacity: 0,
    display: "none",
});

gsap.to(".bar", 2, {
    delay: 1.5,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

gsap.from(".header", 1.5,{
    delay:1.5,
    y:700,
    stagger:{
        amount:0.5,
    },
    ease:"power4.inOut"
});
gsap.from(".container", 2,{
    delay:1.5,
    y:400,
    ease:"power4.inOut",
});
gsap.from(".navbar", 1.5,{
    delay:1.5,
    y:700,
    stagger:{
        amount:0.5,
    },
    ease:"power4.inOut"
});

gsap.to("#ov", 0.25, {
    delay: 3.5,
    opacity: 0,
    display: "none",
});
gsap.to(".videobuilders",0.5, {
    delay: 2.5,
    opacity: 0,
    display: "none",
});


document.getElementById('ov').style.display= none;
document.getElementById('count').style.display= none;

gsap.from(".intro-section ", 1.5,{
    delay:2.5,
    y:700,
    stagger:{
        amount:0.5,
    },
    ease:"power4.inOut"
});
gsap.to("#video1", 0.25, {
    delay: 3.5,
    opacity: 0,
    display: "none",
});













