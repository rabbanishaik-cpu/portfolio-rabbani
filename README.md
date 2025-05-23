# AI Engineer Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases my work as an AI Engineer with a focus on clean design and smooth user experience.

## 🚀 Features

- Modern UI with Tailwind CSS
- Dark/Light mode support using next-themes
- Responsive design for all devices
- Smooth animations with Framer Motion
- Type-safe development with TypeScript
- Component-based architecture using Radix UI primitives

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, custom primitives
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes

## 📦 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd portfolio-rabbani
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
├── app/                      # Main Next.js app directory (pages, layouts, etc.)
├── components/               # Reusable UI components
│   └── ui/                   # UI primitives and component library
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions and configurations
├── public/                   # Static assets (images, etc.)
├── styles/                   # Global styles and Tailwind configurations
├── portfolio-rabbani/        # Nested project directory (fonts, assets)
│   ├── app/                  # Fonts and favicon
│   └── public/               # Additional static assets
```

## 🗂️ Folder Aliases

For easier imports, the following aliases are configured (see `components.json`):
- `@/components` → `components/`
- `@/lib` → `lib/`
- `@/hooks` → `hooks/`
- `@/ui` → `components/ui/`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

- Modify `tailwind.config.ts` for custom styling and theme colors
- Update UI and alias configuration in `components.json`
- Add new components in the `components` or `components/ui` directory
- Add custom hooks in the `hooks` directory
- Add fonts in `portfolio-rabbani/app/fonts`

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.