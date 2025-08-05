// Initialize EmailJS
(function() {
    // Initialize EmailJS with your public key
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('YOUR_PUBLIC_KEY');
})();

// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show sending status
            formStatus.textContent = 'Sending message...';
            formStatus.style.color = '#0f9d58';
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('user_name');
            const email = formData.get('user_email');
            const message = formData.get('message');
            
            // EmailJS configuration
            // Replace these with your actual EmailJS service and template IDs
            const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
            const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
            
            // Prepare template parameters
            const templateParams = {
                to_email: 'rsingh70090@gmail.com',
                from_name: name,
                from_email: email,
                message: message,
                reply_to: email
            };
            
            // Send email using EmailJS
            emailjs.send(serviceId, templateId, templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    formStatus.textContent = 'Message sent successfully! We will get back to you soon.';
                    formStatus.style.color = '#0f9d58';
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    formStatus.textContent = 'Failed to send message. Please try again or contact us directly.';
                    formStatus.style.color = '#d32f2f';
                });
        });
    }

    // Add loading animation to images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add hover effects to gallery images
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click-to-call functionality for phone numbers
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small delay to show the click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Add WhatsApp link functionality
    const whatsappNumber = '+919538921012';
    const whatsappText = 'Hi, I am interested in solar panel installation services. Can you please provide more information?';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
    
    // Create WhatsApp button if needed
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        const whatsappBtn = document.createElement('a');
        whatsappBtn.href = whatsappUrl;
        whatsappBtn.target = '_blank';
        whatsappBtn.className = 'whatsapp-btn';
        whatsappBtn.innerHTML = '💬 Chat on WhatsApp';
        whatsappBtn.style.cssText = `
            display: inline-block;
            background: #25d366;
            color: white;
            padding: 0.8rem 1.5rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            margin-top: 1rem;
            transition: all 0.3s ease;
        `;
        
        whatsappBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
        });
        
        whatsappBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        contactSection.appendChild(whatsappBtn);
    }
});

// Add some additional utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#0f9d58' : type === 'error' ? '#d32f2f' : '#2196f3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}