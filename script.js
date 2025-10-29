// ===== HEADER SCROLL EFFECT =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== SECTION REVEAL =====
const sections = document.querySelectorAll('section');
const revealSections = () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add('visible');
  });
};
window.addEventListener('scroll', revealSections);
revealSections();

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== CONTACT FORM WITH EMAILJS =====
emailjs.init('YOUR_PUBLIC_KEY'); // ضع هنا Public Key

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const serviceID = 'YOUR_SERVICE_ID';   // ضع Service ID
  const templateID = 'YOUR_TEMPLATE_ID'; // ضع Template ID

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      formMessage.textContent = "Message sent successfully ✅";
      form.reset();
      setTimeout(() => { formMessage.textContent = ""; }, 3000);
    }, (err) => {
      formMessage.textContent = "Failed to send message ❌";
      console.error(err);
    });
});
