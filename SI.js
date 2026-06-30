document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contact-modal');
    const ctaNav = document.getElementById('cta-nav');
    const ctaHero = document.getElementById('cta-hero');
    const closeBtn = document.querySelector('.close-btn');
    const coachingForm = document.getElementById('coaching-form');
    const successMessage = document.getElementById('form-success');

    // Function to open modal
    const openModal = () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevents background scrolling
    };

    // Function to close modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Reset form states when closing
        coachingForm.reset();
        coachingForm.classList.remove('hidden');
        successMessage.classList.add('hidden');
    };

    // Event listeners to open
    ctaNav.addEventListener('click', openModal);
    ctaHero.addEventListener('click', openModal);

    // Event listeners to close
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Handle form submission
    coachingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Grab values if needed later for an API integration
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate successful submission
        coachingForm.classList.add('hidden');
        successMessage.classList.remove('hidden');

        // Automatically close modal after a short delay
        setTimeout(() => {
            closeModal();
        }, 2000);
    });
});