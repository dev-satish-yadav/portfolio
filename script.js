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
