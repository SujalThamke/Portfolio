// Smooth scroll to sections when navigation links are clicked
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Simple alert on resume download
const resumeLink = document.querySelector('a[href$=".pdf"]');
if (resumeLink) {
  resumeLink.addEventListener('click', function () {
    alert("Your download will begin shortly.");
  });
}
