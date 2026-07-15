# Peers Cyber Academy - Landing Page

A premium, responsive landing page for Peers Cyber Academy featuring modern design, smooth animations, and SEO optimization.

## Features

- ✅ **Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **SEO Optimized** - Meta tags, semantic HTML, and fast loading
- ✅ **Performance** - Optimized for speed and Core Web Vitals
- ✅ **Accessibility** - WCAG compliant with keyboard navigation support
- ✅ **Interactive Elements** - FAQ accordion, mobile menu, smooth scrolling
- ✅ **Contact Form** - Collects Name, Email, Phone with validation
- ✅ **Sections**:
  - Hero with stats
  - Services (6 offerings)
  - About Us
  - Why Choose Us
  - Testimonials (6 reviews)
  - FAQ (8 questions)
  - Contact form
  - Footer

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **Vanilla JavaScript** - No dependencies, pure JS
- **Google Fonts** - Inter font family

## Color Scheme

- **Primary**: #6366f1 (Indigo)
- **Secondary**: #06b6d4 (Cyan)
- **Dark**: #0f172a (Slate)
- **Light**: #f8fafc (Light slate)
- **Gradient**: Linear gradient from indigo to cyan

## File Structure

```
peers-cyber-academy/
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # JavaScript functionality
├── vercel.json         # Vercel configuration
├── background.jpg.png  # Hero background image
└── README.md           # This file
```

## Local Development

1. Clone or download the project
2. Open `index.html` in a web browser
3. Or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

4. Open http://localhost:8000 in your browser

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to the project directory:
```bash
cd peers-cyber-academy
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your site will be live!

### Option 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click "Add New" → "Project"
4. Import your Git repository or drag and drop the folder
5. Vercel will auto-detect the settings
6. Click "Deploy"

### Option 3: Git Integration

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Connect your GitHub repository to Vercel
3. Every push to main will auto-deploy

## Customization

### Update Content

- Edit `index.html` to change text, services, testimonials, FAQ, etc.
- Update contact information in the contact section and footer

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #6366f1;        /* Your primary color */
    --secondary: #06b6d4;      /* Your secondary color */
    --dark: #0f172a;           /* Dark background */
    /* ... more variables */
}
```

### Add Images

- Replace `background.jpg.png` with your own hero background
- Add images to the about section by replacing the placeholder

### Contact Form Backend

The form currently logs to console. To add a backend:

1. **Using Formspree**:
   - Sign up at [formspree.io](https://formspree.io)
   - Update form action: `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`

2. **Using EmailJS**:
   - Sign up at [emailjs.com](https://www.emailjs.com)
   - Add EmailJS SDK and initialize in `script.js`

3. **Custom Backend**:
   - Uncomment the fetch code in `script.js`
   - Create an API endpoint at `/api/contact`

## Performance Optimization

- Minify CSS and JavaScript for production
- Use image optimization (WebP format)
- Enable Vercel's automatic optimizations
- Lazy load images below the fold

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## SEO Checklist

✅ Meta description
✅ Open Graph tags
✅ Semantic HTML
✅ Alt text for images (add when you replace placeholders)
✅ Fast loading time
✅ Mobile responsive
✅ HTTPS (via Vercel)

## Accessibility Features

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Skip to content link
- High contrast ratios
- Focus indicators

## License

This project is available for personal and commercial use.

## Support

For questions or issues, contact: info@peerscyberacademy.com

---

**Built with ❤️ for Peers Cyber Academy**
