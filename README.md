# Portfolio Website with Hexagon Border Hover Effect

A modern portfolio website with a black background and an interactive hexagon border hover effect. The website features elements that display a hexagonal border animation when hovered over.

## Features

- **Black Background**: Sleek, modern design with a dark theme
- **Hexagon Border Hover Effect**: Elements display a hexagonal border animation on hover
- **Interactive Elements**: Project cards, skills section, and contact links with hover effects
- **Responsive Design**: Works on various screen sizes

## Technologies Used

- HTML5
- CSS3 (with clip-path for hexagon shapes)
- JavaScript (Vanilla)
- Font Awesome for icons

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Hover over elements to see the hexagon border animation effect
4. Interact with links and cards to see additional animations

## Customization

You can easily customize this portfolio by:

- Updating the project information in `index.html`
- Changing colors in `styles.css`
- Adjusting the hexagon border animation in `styles.css`
- Modifying the hover effect timing in `script.js`

## Hexagon Border Effect Explanation

The hexagon border effect works by:
1. Using a container element with a nested content element and a border element
2. Applying CSS `clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)` to create the hexagon shape
3. Setting the border as transparent initially with opacity: 0
4. On hover, transitioning the border opacity to 1 to reveal the hexagon outline
5. Adding a subtle transform for a more dynamic effect

## License

Feel free to use and modify this template for your personal portfolio.

---

Created with ❤️ for showcasing your work in style. 