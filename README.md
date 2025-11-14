# Portfolio — Karthik S Gowda

A minimalist, sophisticated portfolio website showcasing work and expertise as a designer and developer. Built with modern web technologies and design principles, emphasizing typography, whitespace, and purposeful interactions.

![Portfolio Preview](https://via.placeholder.com/1200x600/F5F5F5/000000?text=Portfolio+Preview)

## ✨ Features

### Design
- **Minimalist Aesthetic**: Clean, monochromatic design inspired by high-end design studios
- **Typography-First**: Beautiful serif headlines (Playfair Display) with elegant Inter body text
- **Sophisticated Animations**: Smooth scroll-triggered animations and micro-interactions
- **Custom Cursor**: Desktop-only custom cursor with interactive states
- **Responsive Design**: Flawless experience across all device sizes

### Technical
- **Modern Stack**: React + TypeScript + Tailwind CSS
- **Performance**: Optimized animations and lazy loading
- **Code Organization**: Clean, modular architecture with separated data layer
- **Accessibility**: Semantic HTML and keyboard navigation support
- **SEO Ready**: Meta tags and structured data

## 🎨 Design Philosophy

This portfolio embodies a designer's approach to personal branding:

1. **Simplicity**: Remove unnecessary elements; let content breathe
2. **Hierarchy**: Clear visual hierarchy guides the eye naturally
3. **Consistency**: Unified spacing, typography, and interaction patterns
4. **Purpose**: Every element serves a function—no decoration for decoration's sake

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5000` to view the portfolio.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run start
```

## 📁 Project Structure

```
portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/          # Navigation, Footer
│   │   │   ├── sections/        # Page sections (Hero, About, Projects, etc.)
│   │   │   └── ui/              # Reusable UI components
│   │   ├── data/
│   │   │   └── portfolio.ts     # Centralized content management
│   │   ├── pages/
│   │   │   └── home.tsx         # Main page component
│   │   ├── index.css            # Global styles and utilities
│   │   └── App.tsx              # Root component
│   └── index.html
├── server/                      # Backend (if applicable)
└── README.md
```

## 🎯 Customization

### Update Content

All portfolio content is centralized in `/client/src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... more fields
};

export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    // ... more fields
  }
];
```

### Modify Design

#### Colors
Update color variables in `/client/src/index.css`:

```css
:root {
  --mono-900: hsl(0, 0%, 5%);    /* Darkest */
  --mono-100: hsl(0, 0%, 98%);   /* Lightest */
  /* ... */
}
```

#### Typography
Change fonts in `/client/src/index.css`:

```css
@import url('your-google-fonts-url');

:root {
  --font-display: 'Your Display Font', serif;
  --font-inter: 'Your Body Font', sans-serif;
}
```

#### Spacing & Layout
Adjust container max-width and padding in components:

```tsx
<div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
```

## 🛠 Technologies

### Core
- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Tailwind CSS**: Utility-first CSS

### UI & Interactions
- **Framer Motion**: Animation library
- **Lucide React**: Icon set
- **Radix UI**: Unstyled, accessible components

### Backend (Optional)
- **Express**: Server framework
- **NestJS**: Backend architecture (if using full-stack setup)

## 📱 Sections

### Hero
Large, impactful introduction with geometric visual element and clear CTAs.

### About
Personal statement with focus, location, and availability information.

### Selected Work
Featured projects with detailed descriptions, technologies, and links.

### Skills & Technologies
Clean tag-based display of technical competencies.

### Experience
Timeline-style professional experience section.

### Contact
Direct contact methods and social links.

## ⚡ Performance

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Optimized Assets**: Compressed images and lazy loading

## 🎓 Best Practices

### Code Style
- Consistent component structure
- TypeScript for type safety
- Descriptive variable and function names
- Comments for complex logic

### Git Workflow
```bash
# Feature branches
git checkout -b feature/new-section

# Descriptive commits
git commit -m "Add: New testimonials section with carousel"

# Pull requests for major changes
```

### SEO Optimization
- Semantic HTML elements
- Meta descriptions and OG tags
- Sitemap and robots.txt
- Performance optimization

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

**Karthik S Gowda**
- Email: karthiksgowda28@gmail.com
- LinkedIn: [linkedin.com/in/karthisg](https://linkedin.com/in/karthisg)
- GitHub: [github.com/Karthisgowda](https://github.com/Karthisgowda)

---

<p align="center">
  Designed & Developed with care
</p>

<p align="center">
  <a href="#top">Back to Top ↑</a>
</p>
