document.addEventListener('DOMContentLoaded', () => {
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
}); 