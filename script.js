document.addEventListener('DOMContentLoaded', () => {
    // Start animations immediately
    startAnimations();
    
    // Start animations function
    function startAnimations() {
        // Typing animation for header
        const headerText = document.querySelector('header h1');
        const originalText = headerText.textContent;
        headerText.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                headerText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // After typing is complete, add a blinking cursor
                headerText.classList.add('typing-complete');
                // Start typing the subtitle text
                setTimeout(typeSubtitle, 500);
            }
        }
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Typing animation for subtitle
    const typingTextElement = document.getElementById('typing-text');
    const phrases = [
        "Creating beautiful web experiences",
        "Passionate about clean code",
        "Turning ideas into reality",
        "Full-stack developer",
        "UI/UX enthusiast"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    function typeSubtitle() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Remove a character
            typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50; // Faster when deleting
        } else {
            // Add a character
            typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100; // Normal typing speed
        }
        
        // If word is complete
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at the end of typing
            typingDelay = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Move to next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingDelay = 500; // Pause before typing next word
        }
        
        setTimeout(typeSubtitle, typingDelay);
    }
    
    // Get all hexagon containers
    const hexContainers = document.querySelectorAll('.hex-container');
    
    // Add event listeners for mouse enter and leave
    hexContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            // Add a subtle animation class when mouse enters
            container.classList.add('hover-active');
        });
        
        container.addEventListener('mouseleave', () => {
            // Remove the animation class when mouse leaves
            container.classList.remove('hover-active');
        });
    });
    
    // Add interactive effects for links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
    
    // Add interactive effects for skills
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            skill.style.transform = 'translateY(-3px)';
        });
        
        skill.addEventListener('mouseleave', () => {
            skill.style.transform = 'translateY(0)';
        });
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.hex-container, section');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add('reveal-visible');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    revealOnScroll();

    // Interactive hexagon background
    const hexBgElements = document.querySelectorAll('.hexagon-bg');
    
    hexBgElements.forEach(hex => {
        hex.addEventListener('mouseenter', () => {
            hex.classList.add('hex-active');
            
            // Ripple effect to neighboring hexagons
            const index = Array.from(hexBgElements).indexOf(hex);
            const row = Math.floor(index / 20);
            const col = index % 20;
            
            // Check neighboring hexagons (approximate)
            const neighbors = [
                index - 1, index + 1,  // left, right
                index - 20, index + 20, // top, bottom
                index - 21, index + 19  // diagonals
            ];
            
            neighbors.forEach(neighborIndex => {
                if (neighborIndex >= 0 && neighborIndex < hexBgElements.length) {
                    setTimeout(() => {
                        hexBgElements[neighborIndex].classList.add('hex-ripple');
                        setTimeout(() => {
                            hexBgElements[neighborIndex].classList.remove('hex-ripple');
                        }, 500);
                    }, 100);
                }
            });
        });
        
        hex.addEventListener('mouseleave', () => {
            setTimeout(() => {
                hex.classList.remove('hex-active');
            }, 300);
        });
    });

    // Particle background effect
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    document.body.insertBefore(canvas, document.body.firstChild);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particlesArray = [];
    const numberOfParticles = 100;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.3 + 0.2})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            
            // Connect particles with lines
            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - distance/100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}); 