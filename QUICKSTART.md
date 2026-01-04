# Quick Start Guide - Fubotics Website

## Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## Project Structure Overview

```
src/
├── components/        # Reusable UI components
│   ├── layout/       # Header, Footer
│   ├── sections/     # Page sections
│   └── ui/           # Button, Card
├── styles/           # CSS files
├── App.tsx           # Main app
└── main.tsx          # Entry point
```

---

## Common Tasks

### Add a New Component
```typescript
// src/components/sections/NewSection.tsx
import React from 'react';
import { SectionContainer, SectionTitle } from '../ui/Section';

const NewSection: React.FC = () => {
  return (
    <SectionContainer id="new-section">
      <SectionTitle accent="Title">Section </SectionTitle>
      {/* Content */}
    </SectionContainer>
  );
};

export default NewSection;
```

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  accent: {
    blue: '#4A7CFF',  // Change here
  }
}
```

### Add Animation
Use Framer Motion:
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Change Content
Edit section components in `src/components/sections/`

---

## Scripts Reference

```bash
npm run dev           # Start dev server (hot reload)
npm run build         # Build for production
npm run preview       # Preview production build
npm run lint          # Check code quality
npm run type-check    # TypeScript validation
```

---

## Deployment Quick Links

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Traditional Hosting
1. `npm run build`
2. Upload `dist/` folder to server
3. Configure web server for SPA

---

## File Locations

| What | Where |
|------|-------|
| Header | `src/components/layout/Header.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| Sections | `src/components/sections/` |
| Styles | `src/styles/globals.css` |
| Config | `tailwind.config.js` |

---

## Useful Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Docs](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)

---

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check Tailwind config

---

## Contact & Support

For issues or questions:
- Check README.md for detailed docs
- See DEPLOYMENT.md for deploy help
- Review STANDARDS.md for code guidelines

---

**Happy Coding!**
