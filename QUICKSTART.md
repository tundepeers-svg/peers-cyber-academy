# 🚀 Quick Start Guide

## View Your Website Locally (Right Now!)

### Option 1: Double-click (Simplest)
1. Navigate to: `C:\Users\OlaAd\peers-cyber-academy`
2. Double-click `index.html`
3. Opens in your default browser ✅

### Option 2: Live Server (Better)
```bash
cd C:\Users\OlaAd\peers-cyber-academy
npx http-server -p 8000 -o
```
Opens at: http://localhost:8000

---

## Deploy to Internet (3 minutes)

### Fastest Way - Vercel:

**Step 1: Install Vercel**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
cd C:\Users\OlaAd\peers-cyber-academy
vercel
```

**Step 3: Follow prompts**
- Login with email or GitHub
- Accept defaults
- Get live URL! 🎉

**For production:**
```bash
vercel --prod
```

---

## What You Get

✅ **Fully Responsive** - Mobile, tablet, desktop
✅ **8 Sections** - Hero, Services, About, Why Us, Testimonials, FAQ, Contact, Footer
✅ **Contact Form** - Name, email, phone collection with validation
✅ **SEO Optimized** - Meta tags, fast loading
✅ **Premium Design** - Professional color scheme, smooth animations
✅ **Production Ready** - Can deploy immediately

---

## Next Steps

### 1. Customize Content (Optional)
Edit `index.html`:
- Change text in services
- Update testimonials
- Modify FAQ questions
- Update contact info

### 2. Change Colors (Optional)
Edit `styles.css` line 1-17:
```css
:root {
    --primary: #6366f1;     /* Your brand color */
    --secondary: #06b6d4;   /* Accent color */
}
```

### 3. Add Real Images (Optional)
- Replace `background.jpg.png` with your hero image
- Add team photos to About section
- Keep images under 500KB for fast loading

### 4. Setup Contact Form Backend
Choose one:
- **Formspree** - Easiest (formspree.io)
- **EmailJS** - Free tier (emailjs.com)
- **Custom API** - Full control

See `DEPLOYMENT.md` for instructions.

---

## File Structure

```
peers-cyber-academy/
│
├── index.html              ← Main page (edit content here)
├── styles.css              ← Styles (edit colors here)
├── script.js               ← Functionality (works as-is)
├── background.jpg.png      ← Hero background image
│
├── README.md               ← Full documentation
├── DEPLOYMENT.md           ← Detailed deployment guide
├── QUICKSTART.md          ← This file
│
├── vercel.json            ← Vercel configuration
├── package.json           ← Project metadata
└── .gitignore             ← Git ignore rules
```

---

## Common Tasks

### Update Homepage Hero Text
**File**: `index.html`
**Line**: ~54-56
```html
<h1 class="hero-title">Your New Title<br>
<span class="gradient-text">Your Subtitle</span></h1>
```

### Change Contact Email
**File**: `index.html`
**Lines**: ~390, ~579
```html
<p>info@yourdomain.com</p>
```

### Add a New Service
**File**: `index.html`
**Line**: ~95-115 (copy a service-card block)
```html
<div class="service-card">
    <div class="service-icon">🆕</div>
    <h3 class="service-title">New Service</h3>
    <p class="service-description">Description...</p>
    <ul class="service-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
    </ul>
</div>
```

### Add New Testimonial
**File**: `index.html`
**Line**: ~315-335 (copy testimonial-card block)

---

## Testing Checklist

Before deploying, test:

- [ ] Desktop view (1920px, 1366px)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px, 414px)
- [ ] Mobile menu opens/closes
- [ ] FAQ accordion expands
- [ ] Contact form validates
- [ ] All links work
- [ ] Smooth scrolling works

---

## Need Help?

📧 **Contact Form Issues**: See `DEPLOYMENT.md` → Post-Deployment Checklist
🚀 **Deployment Issues**: See `DEPLOYMENT.md` → Troubleshooting
🎨 **Customization**: See `README.md` → Customization
💻 **Code Questions**: Check `script.js` comments

---

## Pro Tips

1. **Use Git** - Track changes and enable auto-deploy
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Custom Domain** - More professional than .vercel.app
   - Buy domain ($10-15/year)
   - Add to Vercel dashboard
   - Update DNS records

3. **Add Analytics** - Know your visitors
   - Google Analytics (free)
   - Vercel Analytics (built-in)

4. **Optimize Images**
   - Use WebP format
   - Compress before uploading
   - Max 500KB per image

5. **Regular Updates**
   - Update testimonials monthly
   - Refresh services quarterly
   - Keep contact info current

---

**You're all set! 🎉**

**Current Status**: ✅ Website built and ready
**Next Action**: View locally OR deploy to Vercel
**Time to Live**: < 5 minutes

---

## Quick Commands Reference

```bash
# View locally
cd C:\Users\OlaAd\peers-cyber-academy
npx http-server -p 8000 -o

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# Check if working
# Visit: http://localhost:8000
```

**That's it! Your premium landing page is ready to go live! 🚀**
