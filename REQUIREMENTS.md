# Project Requirements

## System Requirements

### Node.js
- Node.js: v18.0.0 or higher
- npm: v9.0.0 or higher (comes with Node.js)

### Recommended Development Environment
- Visual Studio Code
- Modern web browser (Chrome, Firefox, Edge, or Safari)

## Core Dependencies

### Production Dependencies
```
react: ^18.2.0
react-dom: ^18.2.0
framer-motion: ^10.16.16
three: ^0.160.0
@react-three/fiber: ^8.17.10
@react-three/postprocessing: ^2.16.3
@react-three/csg: ^4.0.0
postprocessing: ^6.38.2
@splinetool/react-spline: ^4.0.9
@splinetool/runtime: ^1.9.38
clsx: ^2.1.1
tailwind-merge: ^2.5.5
react-intersection-observer: ^9.5.2
```

### Development Dependencies
```
typescript: ^5.2.2
vite: ^5.0.0
@vitejs/plugin-react: ^4.1.0
tailwindcss: ^3.3.5
postcss: ^8.4.31
autoprefixer: ^10.4.16
@types/react: ^18.2.37
@types/react-dom: ^18.2.15
@types/three: ^0.182.0
terser: ^5.44.1
```

## Installation Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd "Fubotics Upgraded website"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory if needed for environment-specific variables.

### 4. Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:3000/`

### 5. Build for Production
```bash
npm run build
```
Production files will be generated in the `dist` directory.

### 6. Preview Production Build
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on source files
- `npm run type-check` - Run TypeScript type checking without emitting files

## Technology Stack

### Frontend Framework
- React 18.2.0 with TypeScript
- Vite 5.0.0 (Build tool and dev server)

### Styling
- Tailwind CSS 3.3.5 (Utility-first CSS framework)
- PostCSS with Autoprefixer

### Animation
- Framer Motion 10.16.16 (React animation library)

### 3D Graphics
- Three.js 0.160.0 (3D graphics library)
- React Three Fiber (React renderer for Three.js)
- React Three Postprocessing (Post-processing effects)
- React Three CSG (Constructive Solid Geometry)
- Spline React (Interactive 3D scene integration)

### Utility Libraries
- clsx (Conditional class names)
- tailwind-merge (Merge Tailwind classes)

### Additional Libraries
- React Intersection Observer (Viewport detection)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Project Structure
```
src/
├── components/
│   ├── layout/        # Header, Footer components
│   ├── sections/      # Page sections (Hero, Solutions, Vision, etc.)
│   ├── three/         # 3D scene components (Three.js)
│   └── ui/           # Reusable UI components (shadcn-style)
├── lib/              # Utility functions
├── styles/           # Global styles and CSS
└── App.tsx          # Main application component

public/              # Static assets
dist/               # Production build (generated)
```

## Notes

- This project uses legacy peer dependencies for Three.js compatibility
- WebGL support required in browser for 3D features
- Recommended to use the latest LTS version of Node.js
- All code follows professional standards with no emojis
- Production-ready code structure maintained throughout

## Deployment

The project can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Azure Static Web Apps

Build the project using `npm run build` and deploy the contents of the `dist` folder.
