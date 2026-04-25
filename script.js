document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('mainVideo');
    
    if (video) {
        video.muted = true;
        video.play().catch(() => {});
    }
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});