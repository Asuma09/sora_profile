# 🚀 Portfolio Site

Modern and interactive portfolio website showcasing Technology × Language × Creativity

## 📱 Demo

Live site: [Your Vercel URL]

## ✨ Features

- **Dark Theme with Animations**: Smooth scroll animations powered by Framer Motion
- **Multi-language Support**: Japanese / English language switcher
- **Responsive Design**: Mobile-first, fully responsive layout
- **Modern Stack**: React 19, TypeScript, Vite, Tailwind CSS v4
- **Data-Driven**: Centralized translations for easy content management

## 🛠️ Tech Stack

- **React 19.2.0** - UI Library
- **TypeScript** - Type Safety
- **Vite 7.3.1** - Build Tool
- **Tailwind CSS v4** - Styling with @tailwindcss/postcss
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🎨 Sections

1. **Hero** - Eye-catching introduction with animated gradient background
2. **About** - 3-pillar identity (Engineering, Linguistics, Creativity)
3. **Skills** - Technical skills with proficiency levels
4. **Projects** - Project showcase with modal details
5. **Goal Tracker** - Learning goals and milestones
6. **Footer** - Social links and navigation

## 📋 Project Structure

```
src/
├── components/
│   ├── Header.tsx       - Navigation & language switcher
│   ├── Hero.tsx         - Hero section with animations
│   ├── About.tsx        - 3-column about section
│   ├── Skills.tsx       - Skills grid
│   ├── Projects.tsx     - Project cards with modal
│   ├── GoalTracker.tsx  - Goal progress visualization
│   └── Footer.tsx       - Footer section
├── translations/
│   └── index.ts         - Centralized ja/en translations
├── App.tsx              - Main app with LanguageContext
└── index.css            - Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Asuma09/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` directory.

## 🌐 Translations

All content is centralized in `src/translations/index.ts`:

```typescript
export const translations = {
  header: { ja: {...}, en: {...} },
  hero: { ja: {...}, en: {...} },
  about: { ja: {...}, en: {...} },
  // ... more sections
}
```

To update content, edit the relevant section in `src/translations/index.ts` and it automatically updates all components.

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import this repository
4. Deploy automatically

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect GitHub repository
4. Deploy automatically

## 🎯 Learning Goals

- 仏検3級取得 (60%)
- AWSクラウドプラクティショナー認定取得 (45%)

## 🔗 Social Links

- GitHub: [Asuma09](https://github.com/Asuma09)
- Instagram: [@sora051209](https://instagram.com/sora051209)
- Email: a.sora.1209@gmail.com

## 📝 License

This project is open source and available under the MIT License.
