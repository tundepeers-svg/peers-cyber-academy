# Deployment Guide - Peers Cyber Academy

## Quick Deployment to Vercel (Recommended)

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI** (one-time setup):
```bash
npm install -g vercel
```

2. **Navigate to project**:
```bash
cd C:\Users\OlaAd\peers-cyber-academy
```

3. **Login to Vercel**:
```bash
vercel login
```

4. **Deploy**:
```bash
vercel
```

5. **For production**:
```bash
vercel --prod
```

Your site will be live at: `https://your-project-name.vercel.app`

---

### Method 2: Vercel Dashboard (No CLI needed)

1. **Create account**:
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or email

2. **Deploy via drag & drop**:
   - Click "Add New" → "Project"
   - Click "Browse" or drag the `peers-cyber-academy` folder
   - Vercel auto-detects settings
   - Click "Deploy"

3. **Done!** Your site is live in ~30 seconds

---

### Method 3: Git Integration (Best for teams)

1. **Initialize Git** (if not already done):
```bash
cd C:\Users\OlaAd\peers-cyber-academy
git init
git add .
git commit -m "Initial commit: Peers Cyber Academy landing page"
```

2. **Create GitHub repository**:
   - Go to https://github.com/new
   - Create a new repository named `peers-cyber-academy`
   - Don't initialize with README (we have one)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/peers-cyber-academy.git
git branch -M main
git push -u origin main
```

4. **Connect to Vercel**:
   - Go to https://vercel.com
   - Click "Add New" → "Project"
   - Import from GitHub
   - Select `peers-cyber-academy` repository
   - Click "Deploy"

5. **Auto-deploy enabled**: Every push to `main` branch will automatically deploy!

---

## Alternative Deployment Options

### Netlify

1. **Drag & Drop**:
   - Go to https://app.netlify.com/drop
   - Drag the `peers-cyber-academy` folder
   - Done!

2. **Via Git**:
   - Connect GitHub repository
   - Deploy from `main` branch

### GitHub Pages

1. **Push to GitHub** (see Method 3 above)

2. **Enable GitHub Pages**:
   - Go to repository → Settings → Pages
   - Source: Deploy from branch → `main` → `/root`
   - Save

3. **Access**: `https://YOUR_USERNAME.github.io/peers-cyber-academy`

### AWS S3 + CloudFront

1. **Create S3 bucket**:
```bash
aws s3 mb s3://peers-cyber-academy
```

2. **Upload files**:
```bash
aws s3 sync . s3://peers-cyber-academy --exclude ".git/*"
```

3. **Enable static website hosting**:
```bash
aws s3 website s3://peers-cyber-academy --index-document index.html
```

4. **Create CloudFront distribution** (optional, for HTTPS)

---

## Post-Deployment Checklist

### 1. Test Your Site
- [ ] Homepage loads correctly
- [ ] All sections are visible
- [ ] Mobile menu works
- [ ] FAQ accordion functions
- [ ] Contact form validation works
- [ ] Smooth scrolling works
- [ ] Test on mobile devices
- [ ] Test on different browsers

### 2. Update Contact Form Backend

The form currently logs to console. Add a backend:

**Option A: Formspree (Easiest)**
```html
<!-- In index.html, update the form tag: -->
<form class="contact-form" id="contactForm" 
      action="https://formspree.io/f/YOUR_FORM_ID" 
      method="POST">
```

**Option B: EmailJS**
```bash
# Add EmailJS to index.html before </body>:
<script src="https://cdn.emailjs.com/sdk/3.2.0/email.min.js"></script>
<script>
  emailjs.init("YOUR_PUBLIC_KEY");
</script>
```

**Option C: Vercel Serverless Function**

Create `api/contact.js`:
```javascript
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, phone, message } = req.body;
    
    // Send email using SendGrid, Mailgun, etc.
    
    res.status(200).json({ success: true });
  }
}
```

### 3. Add Analytics

**Google Analytics:**
```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Vercel Analytics:**
```html
<!-- Add before </head> in index.html -->
<script defer src="/_vercel/insights/script.js"></script>
```

### 4. SEO Optimization

- [ ] Update meta description in `index.html`
- [ ] Add Open Graph image (1200x630px)
- [ ] Submit sitemap to Google Search Console
- [ ] Add structured data (Schema.org)
- [ ] Set up Google Search Console
- [ ] Add favicon and app icons

### 5. Performance

- [ ] Enable Vercel's automatic optimizations
- [ ] Compress images (use WebP format)
- [ ] Test with Google PageSpeed Insights
- [ ] Verify Core Web Vitals

### 6. Custom Domain (Optional)

1. **Purchase domain** (Namecheap, GoDaddy, etc.)

2. **In Vercel Dashboard**:
   - Go to Project → Settings → Domains
   - Add your domain: `peerscyberacademy.com`
   - Follow DNS configuration instructions

3. **Update DNS records** (at your domain registrar):
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

4. **Wait for DNS propagation** (up to 48 hours)

---

## Environment Variables (If needed later)

### In Vercel:

1. Go to Project → Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_API_URL`
   - `FORMSPREE_ID`
   - `EMAILJS_KEY`
   - etc.

### In `.env.local` (for local development):
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
FORMSPREE_ID=your_formspree_id
```

---

## Troubleshooting

### Issue: Site not loading
- Check build logs in Vercel dashboard
- Ensure all files are uploaded
- Verify `index.html` is in root directory

### Issue: Images not showing
- Check image paths (case-sensitive on Linux servers)
- Ensure `background.jpg.png` is uploaded
- Use absolute paths: `/background.jpg.png`

### Issue: Form not working
- Add form backend (see Post-Deployment Checklist)
- Check browser console for errors
- Verify form validation in `script.js`

### Issue: CSS not loading
- Clear browser cache
- Check Network tab in DevTools
- Verify `styles.css` path in `index.html`

---

## Monitoring & Maintenance

### Uptime Monitoring
- UptimeRobot: https://uptimerobot.com (Free)
- Pingdom: https://www.pingdom.com

### Analytics
- Google Analytics 4
- Vercel Analytics (built-in)
- Hotjar for heatmaps

### Regular Updates
- Review and update content quarterly
- Update testimonials as you get new ones
- Add new services/courses
- Keep contact information current

---

## Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

For website customization:
- See `README.md` for detailed instructions

---

**Your website is now ready for production! 🚀**

**Live URL**: Will be provided after deployment
**Admin Dashboard**: https://vercel.com/dashboard
