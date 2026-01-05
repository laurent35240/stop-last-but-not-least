const quotePrefix = "Every time somebody says 'last but not least,'";
const celebrationThreshold = 100;

const quoteEndings = [
    "I hope they're referring to the end of their speech.",
    "I die a little inside. Not enough to actually leave, unfortunately.",
    "it's usually the person I liked the least saying the thing I care about the least.",
    "I look for the nearest exit. It's not there. Neither is my will to live.",
    "my nap gets delayed by another layer of disappointment.",
    "a meeting that could have been an email gains another five minutes of life.",
    "I assume they are gaslighting me into thinking this matters.",
    "I mentally check out and start planning what I'll have for lunch. It's always more important.",
    "I know for a fact it's going to be both last AND least.",
    "I wonder if they realize we all stopped listening after 'good morning.'",
    "an angel doesn't get its wings. An employee loses their will to live instead.",
    "I question every life choice that led me to this conference room.",
    "I can feel my soul trying to escape through my ears.",
    "I'm reminded that corporate jargon is just a fancy way to waste everyone's time.",
    "I silently hope they'll trip on their words. And maybe their shoelaces.",
    "I realize I've been holding my breath for five minutes. Not long enough.",
    "a perfectly good minute of my life gets filed under 'regrets.'",
    "I know they're about to introduce someone who should have been first but nobody cares.",
    "my enthusiasm dies. It was already on life support, to be fair.",
    "I add another tally to my internal 'why am I here' scoreboard.",
    "I contemplate faking a medical emergency. Then I remember I'd have to explain it later.",
    "I'm pretty sure they're legally required to say something completely irrelevant next."
];

// Initialize counter from local storage
let count = parseInt(localStorage.getItem('crushCount')) || 0;
document.getElementById('count-num').innerText = count;

// Set celebration message dynamically
document.getElementById('celebration-message').innerText =
    `Congratulations! You've survived ${celebrationThreshold} uses of "last but not least."`;

// Show replay button if user has reached the threshold before
if (count >= celebrationThreshold) {
    document.getElementById('replay-btn').classList.add('show');
}

function endureMore() {
    const quoteElement = document.getElementById('quote');

    // Fade out
    quoteElement.classList.add('fade-out');

    // Wait for fade out, then change text and fade in
    setTimeout(() => {
        // Update Quote
        const randomIndex = Math.floor(Math.random() * quoteEndings.length);
        quoteElement.innerText = `"${quotePrefix} ${quoteEndings[randomIndex]}"`;

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

// Run once on load to show first quote
window.onload = () => {
    const randomIndex = Math.floor(Math.random() * quoteEndings.length);
    document.getElementById('quote').innerText = `"${quotePrefix} ${quoteEndings[randomIndex]}"`;
};
