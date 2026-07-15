// Peers Cyber - Premium JavaScript Interactions
// AI-First Cybersecurity Platform

// ============================================
// NAVIGATION
// ============================================

// Scroll-based navigation transparency
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-blur', 'border-b', 'border-white/10');
    } else {
        navbar.classList.remove('nav-blur', 'border-b', 'border-white/10');
    }
});

// Mobile menu toggle
mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenuBtn.querySelector('svg').innerHTML = isOpen
        ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />'
        : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileMenu?.classList.add('hidden');
        }
    });
});

// ============================================
// INTERSECTION OBSERVER - FADE IN ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards, case studies, testimonials
document.querySelectorAll('.service-card, .glass-dark, article').forEach(el => {
    observer.observe(el);
});

// ============================================
// FAQ ACCORDION
// ============================================

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('svg');
        const isOpen = !answer.classList.contains('hidden');

        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach(a => {
            if (a !== answer) {
                a.classList.add('hidden');
            }
        });

        document.querySelectorAll('.faq-item svg').forEach(i => {
            if (i !== icon) {
                i.style.transform = 'rotate(0deg)';
            }
        });

        // Toggle current FAQ
        if (isOpen) {
            answer.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        } else {
            answer.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        // Simulate API call (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Success state
        submitBtn.textContent = '✓ Message Sent!';
        submitBtn.classList.remove('from-primary-500', 'to-blue-600');
        submitBtn.classList.add('bg-green-500');

        // Reset form
        contactForm.reset();

        // Show success message
        showNotification('Thank you! We\'ll get back to you within 24 hours.', 'success');

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-green-500');
            submitBtn.classList.add('from-primary-500', 'to-blue-600');
        }, 3000);

        console.log('Form submitted:', data);

    } catch (error) {
        submitBtn.textContent = 'Error - Try Again';
        submitBtn.classList.add('bg-red-500');
        showNotification('Something went wrong. Please try again.', 'error');

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-red-500');
        }, 3000);
    }
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    notification.className = `fixed top-24 right-8 ${bgColor} text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-slide-up`;
    notification.innerHTML = `
        <div class="flex items-center space-x-3">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                ${type === 'success'
                    ? '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />'
                    : '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />'
                }
            </svg>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ============================================
// ANIMATED PARTICLES BACKGROUND
// ============================================

function createParticles() {
    const hero = document.querySelector('#home');
    if (!hero) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        particle.style.opacity = Math.random() * 0.5 + 0.3;

        hero.appendChild(particle);
    }
}

// Initialize particles on load
window.addEventListener('load', createParticles);

// ============================================
// AI CHATBOT WIDGET
// ============================================

const chatbotTrigger = document.getElementById('chatbot-trigger');
let chatbotWindow = null;

chatbotTrigger?.addEventListener('click', () => {
    if (chatbotWindow) {
        chatbotWindow.remove();
        chatbotWindow = null;
        return;
    }

    chatbotWindow = document.createElement('div');
    chatbotWindow.className = 'fixed bottom-28 right-8 w-96 h-[500px] glass-dark rounded-3xl shadow-2xl z-50 animate-slide-up border border-white/10';
    chatbotWindow.innerHTML = `
        <div class="flex items-center justify-between p-6 border-b border-white/10">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div>
                    <div class="font-bold">Security Assistant</div>
                    <div class="text-xs text-green-500 flex items-center space-x-1">
                        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>Online</span>
                    </div>
                </div>
            </div>
            <button id="close-chatbot" class="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div class="p-6 h-[340px] overflow-y-auto" id="chat-messages">
            <div class="flex items-start space-x-3 mb-4">
                <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="bg-white/5 rounded-2xl rounded-tl-none p-4 max-w-xs">
                    <p class="text-sm">Hi! I'm your AI security assistant. How can I help you today?</p>
                </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-4">
                <button class="quick-reply px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-colors duration-300">
                    Get a quote
                </button>
                <button class="quick-reply px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-colors duration-300">
                    Book assessment
                </button>
                <button class="quick-reply px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-colors duration-300">
                    SOC 2 compliance
                </button>
            </div>
        </div>

        <div class="p-4 border-t border-white/10">
            <form id="chat-form" class="flex items-center space-x-2">
                <input
                    type="text"
                    id="chat-input"
                    placeholder="Type your message..."
                    class="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
                <button type="submit" class="p-2 bg-gradient-to-r from-primary-500 to-blue-600 rounded-xl hover:shadow-lg transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(chatbotWindow);

    // Close chatbot
    document.getElementById('close-chatbot')?.addEventListener('click', () => {
        chatbotWindow.remove();
        chatbotWindow = null;
    });

    // Handle chat form
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Quick reply buttons
    document.querySelectorAll('.quick-reply').forEach(btn => {
        btn.addEventListener('click', () => {
            handleChatMessage(btn.textContent.trim());
        });
    });

    chatForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            handleChatMessage(message);
            chatInput.value = '';
        }
    });

    function handleChatMessage(message) {
        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'flex items-start space-x-3 mb-4 justify-end';
        userMsg.innerHTML = `
            <div class="bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl rounded-tr-none p-4 max-w-xs">
                <p class="text-sm">${message}</p>
            </div>
        `;
        chatMessages.appendChild(userMsg);

        // Simulate AI response
        setTimeout(() => {
            const aiMsg = document.createElement('div');
            aiMsg.className = 'flex items-start space-x-3 mb-4';
            aiMsg.innerHTML = `
                <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="bg-white/5 rounded-2xl rounded-tl-none p-4 max-w-xs">
                    <p class="text-sm">I'd be happy to help with that! A security specialist will reach out within 15 minutes. In the meantime, would you like to:</p>
                    <div class="mt-3 space-y-2">
                        <button class="block w-full text-left px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs transition-colors duration-300">
                            → Start free assessment
                        </button>
                        <button class="block w-full text-left px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs transition-colors duration-300">
                            → View pricing
                        </button>
                    </div>
                </div>
            `;
            chatMessages.appendChild(aiMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================

const scrollProgress = document.createElement('div');
scrollProgress.className = 'fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-blue-600 z-50 transition-all duration-300';
scrollProgress.style.width = '0%';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;
});

// ============================================
// STATS COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// CUSTOM CURSOR (OPTIONAL PREMIUM FEATURE)
// ============================================

const cursor = document.createElement('div');
cursor.className = 'fixed w-4 h-4 bg-primary-500/30 rounded-full pointer-events-none z-50 transition-all duration-300 hidden lg:block';
document.body.appendChild(cursor);

const cursorDot = document.createElement('div');
cursorDot.className = 'fixed w-1 h-1 bg-primary-500 rounded-full pointer-events-none z-50 transition-all duration-100 hidden lg:block';
document.body.appendChild(cursorDot);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 8}px`;
    cursor.style.top = `${e.clientY - 8}px`;

    cursorDot.style.left = `${e.clientX - 2}px`;
    cursorDot.style.top = `${e.clientY - 2}px`;
});

// Enlarge cursor on hover over interactive elements
document.querySelectorAll('a, button, .service-card, .hover-lift').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.backgroundColor = 'rgba(14, 165, 233, 0.2)';
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'rgba(14, 165, 233, 0.3)';
    });
});

// ============================================
// CONSOLE BRANDING
// ============================================

console.log(
    '%cPeers Cyber 🛡️',
    'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); -webkit-background-clip: text; color: transparent;'
);
console.log(
    '%cAI-First Cybersecurity Platform\n%cSecure. Automated. Enterprise-Ready.',
    'font-size: 14px; color: #0ea5e9;',
    'font-size: 12px; color: #6b7280;'
);

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Keyboard navigation highlight
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Reduced motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
        el.style.animation = 'none';
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Peers Cyber platform initialized');
});