// app/page.tsx
const themeKey = process.env.NEXT_PUBLIC_THEME_KEY || "themeA";
const ThemePage = require(`../themes/${themeKey}/page`).default;

export default function Home() {
  return <ThemePage />;
}
