// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle('active')
}

// Close menu when clicking on a navigation link
let navLinks1 = document.querySelectorAll(".navbar a");

navLinks1.forEach(link => {
    link.addEventListener("click", () => {
        if (navbar.classList.contains("active")) {
            menuIcon.classList.remove("fa-xmark");
            navbar.classList.remove("active");
        }
    });
});

// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.gatAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').addEventListener('active');
            })
        }
    })

    // sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

}

// scroll reveal

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js 

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', "React Js Developer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDeley: 1000,
    loop: true
})


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}


const contactForm = document.querySelector('.contact-form');
const successMessage = document.getElementById('successMessage');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');



contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = {
        fullname: fullname.value,
        email: email.value,
        phone: phone.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
        console.log("message", xhr.responseText)
        if (xhr.responseText === 'Message sent successfully!') {
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none'; 
            }, 5000);

            contactForm.reset();
        } else {
            alert("Something went wrong");
        }
    }

    xhr.send(JSON.stringify(formData));
})

