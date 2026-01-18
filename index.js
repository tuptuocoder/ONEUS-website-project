// Include GSAP in your project: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

// Select all anchors
const anchors = document.querySelectorAll('.floating-anchor');

anchors.forEach((anchor, index) => {
  // 1. Add subtle horizontal "drift" (Randomized)
  gsap.to(anchor, {
    x: "random(-20, 20)",
    duration: "random(3, 5)",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: index * 0.5
  });

  // 2. Click Transition
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Stop immediate jump
    const destination = this.href;

    // Shrink and fade effect before leaving
    gsap.to(this.querySelector('.circle'), {
      scale: 0.5,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        window.location.href = destination;
      }
    });
  });
});