// Typewriter Effect
const typewriterElement = document.getElementById('typewriter-text');
const phrases = ["Node.js Developer", "AI Full Stack Developer"];
let phraseIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (!typewriterElement) return;

    const currentPhrase = phrases[phraseIndex];
    
    // Type the next character
    typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    let typeSpeed = 100;

    if (charIndex === currentPhrase.length) {
        // Pause at the end for 2 seconds (allows 2 cursor blinks)
        setTimeout(() => {
            // Instantly clear the text
            typewriterElement.textContent = "";
            charIndex = 0;
            // Move to next phrase
            phraseIndex = (phraseIndex + 1) % phrases.length;
            // Wait half a second on the blank screen before starting the new word
            setTimeout(typeWriter, 500);
        }, 2000);
        return; // Exit this function call so we don't trigger the normal setTimeout
    }

    setTimeout(typeWriter, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, 1000); // Initial delay before typing starts
});


// Horizontal Scroll for Projects
function scrollProjects(direction) {
    const container = document.getElementById('projects-container');
    const scrollAmount = 370; // width of card + gap
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Theme Toggle Logic
const themeToggle = document.querySelector('.toggle-track');
const icon = document.querySelector('.toggle-thumb i');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('light-theme')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
}

// Contact Form Submission
const contactForm = document.querySelector('.sleek-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the page from refreshing
        
        // Grab form fields
        const firstName = this.querySelector('input[name="First Name"]').value.trim();
        const lastName = this.querySelector('input[name="Last Name"]').value.trim();
        const userEmail = this.querySelector('input[name="Email"]').value.trim();
        const message = this.querySelector('textarea[name="Message"]').value.trim();
        
        const fullName = firstName + ' ' + lastName;
        
        // Construct the mailto link
        const targetEmail = "sy96552@gmail.com";
        const subject = encodeURIComponent(`New Portfolio Message from ${fullName}`);
        const body = encodeURIComponent(`You have received a new message from your portfolio website.\n\nName: ${fullName}\nEmail: ${userEmail}\n\nMessage:\n${message}`);
        
        // Open the user's default email client
        window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
        
        // Optional: show a quick success state on the button
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Opening Email Client... <i class="fas fa-external-link-alt"></i>';
        btn.style.background = '#4ade80';
        btn.style.color = '#111';
        
        // Reset form and button
        setTimeout(() => {
            this.reset();
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.color = '';
        }, 3000);
    });
}
