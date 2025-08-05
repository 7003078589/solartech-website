# Solectric Solutions - Solar Panel Installation Website

A modern, responsive single-page website for Solectric Solutions, a solar panel installation company based in Bengaluru, India.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Integrated with EmailJS for sending emails without backend
- **WhatsApp Integration**: Direct WhatsApp chat button
- **SEO Optimized**: Proper meta tags and structure
- **Fast Loading**: Optimized for performance

## File Structure

```
solar-site/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Setup Instructions

### 1. Basic Setup
1. Download all files to your web server or local directory
2. Open `index.html` in a web browser to view the site

### 2. EmailJS Configuration (For Contact Form)

The contact form uses EmailJS to send emails. Follow these steps to set it up:

#### Step 1: Sign up for EmailJS
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Verify your email address

#### Step 2: Create an Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

#### Step 3: Create an Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:
   ```
   Subject: New Contact Form Submission - Solectric Solutions
   
   Name: {{from_name}}
   Email: {{from_email}}
   Message: {{message}}
   
   This is a new contact form submission from your website.
   ```
4. Save the template and note down your **Template ID**

#### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

#### Step 5: Update the JavaScript
Open `script.js` and replace the placeholder values:

```javascript
// Line 3: Replace 'YOUR_PUBLIC_KEY'
emailjs.init('YOUR_PUBLIC_KEY');

// Line 47: Replace 'YOUR_SERVICE_ID'
const serviceId = 'YOUR_SERVICE_ID';

// Line 48: Replace 'YOUR_TEMPLATE_ID'
const templateId = 'YOUR_TEMPLATE_ID';
```

### 3. Customization

#### Update Company Information
- Edit contact details in `index.html`
- Update address, phone, and email in the contact section

#### Replace Placeholder Images
- Replace placeholder images with your actual project photos
- Update the logo image in the hero section
- Add your real project images to the gallery section

#### Customize Colors
- Main green color: `#0f9d58`
- Accent yellow color: `#ffb300`
- Edit colors in `styles.css` to match your brand

## Features Included

### Sections
1. **Hero Section**: Company logo, tagline, and call-to-action
2. **About Us**: Company introduction and why choose us
3. **Services**: List of all solar services offered
4. **Power Generation**: Solar system capacity and output table
5. **Brands**: Partner brands and manufacturers
6. **Gallery**: Project showcase (placeholder images)
7. **Contact**: Contact information and form

### Interactive Features
- Smooth scrolling navigation
- Contact form with email sending
- WhatsApp integration
- Responsive design
- Hover effects and animations
- Loading animations

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Deployment

### Option 1: GitHub Pages (Free)
1. Upload files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [Netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get a free subdomain or connect your custom domain

### Option 3: Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Configure your domain to point to the hosting

## Support

For technical support or customization requests, contact:
- Email: rsingh70090@gmail.com
- Phone: +91 95389 21012

## License

This website is created for Solectric Solutions. All rights reserved.

---

**Note**: Make sure to test the contact form after setting up EmailJS to ensure emails are being sent correctly.