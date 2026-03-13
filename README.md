# M R Gowtham — Developer Portfolio

A modern, minimal, and fully responsive MERN Stack Developer portfolio built with **React.js + Vite + Tailwind CSS**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ installed
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 📸 Adding Your Profile Photo

In `src/components/Hero.jsx`, find this comment:
```jsx
{/* Add your photo: replace the div above with:
 * <img src="/profile.jpg" alt="M R Gowtham" className="w-full h-full object-cover" />
 */}
```

1. Add your photo as `public/profile.jpg`
2. Replace the SVG placeholder div with the `<img>` tag above

---

## 📄 Adding Your Resume

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the `public/` folder

The "Download Resume" buttons throughout the site will then work automatically.

---

## 📬 Contact Form Integration

The contact form currently simulates submission. To make it functional, integrate one of:

### Option A: EmailJS (Free, No Backend)
```bash
npm install @emailjs/browser
```

### Option B: Formspree
Change the form action to your Formspree endpoint.

---

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` → `colors.brand`
- **Fonts**: Edit `index.html` Google Fonts link + `tailwind.config.js` → `fontFamily`
- **Projects**: Edit `src/components/Projects.jsx` → `projects` array
- **Skills**: Edit `src/components/Skills.jsx` → `skillGroups` array

---

## 🚢 Deployment (Vercel)

```bash
npm run build
# Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages
```

Or connect your GitHub repo to Vercel for automatic deployments.

---

## 🛠️ Tech Stack

- **React.js 18** — UI Framework
- **Vite 5** — Build Tool
- **Tailwind CSS 3** — Utility-first Styling
- **Google Fonts** — Syne (Display) + DM Sans (Body) + JetBrains Mono (Code)

---

Built with ❤️ by M R Gowtham
