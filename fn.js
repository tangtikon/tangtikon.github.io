// Typing effect
const typingText = "Hi, I'm Tangtikon";
const typingEl = document.getElementById('typing');
let i = 0;
function type() {
    if (i < typingText.length) {
    typingEl.textContent += typingText.charAt(i);
    i++;
    setTimeout(type, 100);
    }
}
type();

// Change background color slightly on scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.body.style.background = `linear-gradient(to right, #e0e7ff ${Math.min(100, scrollY)}px, #f3f4f6)`;
});