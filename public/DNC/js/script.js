const slider = document.getElementById("slider");
const background = document.querySelector('.background');
const toggleAnimationBtn = document.getElementById("toggleAnimation");

let isAnimating = false;
let animationInterval;
let currentIndex = 7;

// Create img elements for all 23 images dynamically
const images = [];
for (let i = 1; i <= 23; i++) {
    const img = document.createElement('img');
    img.src = `./images/IMG (${i}).jpg`;
    img.classList.add('cycle-image', 'hidden');
    background.appendChild(img);
    images.push(img);
}

// Initially show the first image
images[7].classList.remove('hidden');

// Function to update the image based on slider value
function updateImage(index) {
    images[currentIndex].classList.add('hidden');  // Hide current image
    images[index].classList.remove('hidden');      // Show new image
    currentIndex = index;                          // Update current index
}

// Handle slider input manually
slider.addEventListener("input", function() {
    const sliderValue = slider.value;
    const newIndex = Math.floor((sliderValue / 100) * (images.length - 1));
    
    if (newIndex !== currentIndex) {
        updateImage(newIndex);
    }
});

// Function to start the automatic slider animation
function startAnimation() {
    let value = parseInt(slider.value, 10);  // Get the current slider value

    animationInterval = setInterval(() => {
        value += 0.1;  // Increase slider value gradually

        if (value > 100) {
            value = 0;  // Reset slider value to 0 after reaching 100
        }

        slider.value = value;  // Update slider value

        // Calculate the new image index and update the image
        const newIndex = Math.floor((value / 100) * (images.length - 1));
        if (newIndex !== currentIndex) {
            updateImage(newIndex);
        }
    }, 100);  // Speed of transition (100ms for smooth animation)
}

// Function to stop the automatic slider animation
function stopAnimation() {
    clearInterval(animationInterval);
}

// Toggle animation when the button is clicked
toggleAnimationBtn.addEventListener('click', function() {
    if (isAnimating) {
        stopAnimation();
        toggleAnimationBtn.textContent = 'Start Animation';
    } else {
        startAnimation();
        toggleAnimationBtn.textContent = 'Stop Animation';
    }
    isAnimating = !isAnimating;
});
