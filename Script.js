// hamburger menu navigation
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});


// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        accordionItem.classList.toggle('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.padding = '20px 0';
    }
});

// Form submission
const contactForm = document.querySelector('form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will contact you shortly.');
        contactForm.reset();
    });
}





// Dropdown functionality
document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', () => {
        const dropdown = header.parentElement;
        dropdown.classList.toggle('active');
    });
});


// Toggle buttons
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Update pricing for annual plans
        if(button.textContent.includes('Annual')) {
            document.querySelectorAll('.price').forEach(price => {
                const monthly = parseFloat(price.textContent.replace('$', ''));
                const annual = monthly * 12 * 0.8; // 20% discount
                price.innerHTML = `$${annual.toFixed(0)}<span>/year</span>`;
            });
        } else {
            document.querySelectorAll('.price').forEach(price => {
                const text = price.textContent;
                if(text.includes('Starter')) {
                    price.innerHTML = '$79<span>/month</span>';
                } else if(text.includes('Pro')) {
                    price.innerHTML = '$129<span>/month</span>';
                } else {
                    price.innerHTML = '$199<span>/month</span>';
                }
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        header.style.padding = '20px 0';
    }
});