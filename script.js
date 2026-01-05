const quotePrefix = "Every time somebody says 'last but not least,'";
const celebrationThreshold = 100;

let quoteEndings = [];

// Load quotes from JSON file
async function loadQuotes() {
    try {
        const response = await fetch('quotes.json');
        quoteEndings = await response.json();
    } catch (error) {
        console.error('Failed to load quotes:', error);
        // Fallback quotes if loading fails
        quoteEndings = [
            "I hope they're referring to the end of their speech.",
            "I die a little inside. Not enough to actually leave, unfortunately."
        ];
    }
}

// Initialize counter from local storage
let count = parseInt(localStorage.getItem('crushCount')) || 0;

// Initialize the application
async function init() {
    await loadQuotes();

    // Update counter display
    document.getElementById('count-num').innerText = count;

    // Set celebration message dynamically
    document.getElementById('celebration-message').innerText =
        `Congratulations! You've survived ${celebrationThreshold} uses of "last but not least."`;

    // Show replay button if user has reached the threshold before
    if (count >= celebrationThreshold) {
        document.getElementById('replay-btn').classList.add('show');
    }

    // Show first quote
    displayRandomQuote();
}

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quoteEndings.length);
    document.getElementById('quote').innerText = `"${quotePrefix} ${quoteEndings[randomIndex]}"`;
}

function endureMore() {
    const quoteElement = document.getElementById('quote');

    // Fade out
    quoteElement.classList.add('fade-out');

    // Wait for fade out, then change text and fade in
    setTimeout(() => {
        // Update Quote
        displayRandomQuote();

        // Fade in
        quoteElement.classList.remove('fade-out');
    }, 300);

    // Update Counter
    count++;
    const countElement = document.getElementById('count-num');
    countElement.innerText = count;
    localStorage.setItem('crushCount', count);

    // Trigger pulse animation
    countElement.classList.remove('pulse');
    void countElement.offsetWidth; // Force reflow to restart animation
    countElement.classList.add('pulse');

    // Check if we reached the celebration threshold
    if (count === celebrationThreshold) {
        document.getElementById('replay-btn').classList.add('show');
        setTimeout(() => {
            showCelebration();
        }, 500);
    }
}

function replayCelebration() {
    showCelebration();
}

function createConfetti() {
    const colors = ['#ff4d4d', '#ff6b6b', '#ff8787', '#ffa5a5'];
    const confettiCount = 200;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -10 + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 1 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 4) + 's';

        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 8000);
    }
}

function showCelebration() {
    const overlay = document.getElementById('celebration-overlay');
    overlay.classList.add('show');
    createConfetti();
}

function closeCelebration() {
    const overlay = document.getElementById('celebration-overlay');
    overlay.classList.remove('show');
}

// Initialize application when page loads
window.onload = init;
