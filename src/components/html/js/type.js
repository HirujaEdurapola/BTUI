const phrases = [
    "Where Realism Meets Its Limits",
    "Explore Beyond Imagination",
    "Your Journey Awaits",
    "Fly into the Future"
];

let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = '';
let isDeleting = false;
const typingElement = document.getElementById('typing');

function type() {
    const fullPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // Remove letters
        currentPhrase = fullPhrase.substring(0, letterIndex--);
    } else {
        // Add letters
        currentPhrase = fullPhrase.substring(0, letterIndex++);
    }

    typingElement.textContent = currentPhrase;

    if (!isDeleting && letterIndex === fullPhrase.length) {
        // Pause before starting to delete
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && letterIndex === 0) {
        // Move to the next phrase after deletion
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', type);
