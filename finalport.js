ScrollReveal(
    {
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    }
);
ScrollReveal().reveal('.home-content, .about-content', { origin:'top' });
ScrollReveal().reveal('.avtarimg, .shapeimg, .service-container, .portfolio-container, form, .progress_bar', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content')
ScrollReveal().reveal('.photo')

const typed = new Typed('.writen-text',{
    strings:['Full-Stack Developer','Designer','Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});