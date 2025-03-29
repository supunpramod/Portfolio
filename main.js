// toggle navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}



// scroll sectin active link
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset =sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top < offset+height){
            navLinks.forEach.apply(links=>{
                links.classLIst.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};


// scroll reveal
ScrollReveal({ 
    dustance:'80px',
    duration:2000,
    delay:200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js 

const typed = new Typed('.multiple-text',{
    strings:['Full Stack Developer','Multimedia Designer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // පිටුව නැවත ලෝඩ් වීම වැලැක්වීම
  
    // Form දත්ත ලබාගැනීම
    var params = {
      user_name: this.user_name.value,
      user_email: this.user_email.value,
      subject: this.subject.value,
      user_mobile: this.user_mobile.value,
      message: this.message.value
    };
  
    // EmailJS මගින් ඊමේල් යැවීම
    emailjs.send("service_wqzmms7", "template_ho0a10y", params)
      .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("Failed to send message. Please try again!");
        console.error("Error:", error);
      });
  });