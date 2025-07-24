// app/layout.tsx
import { ReactNode } from "react";

// Lấy theme từ biến môi trường
const themeKey = process.env.NEXT_PUBLIC_THEME_KEY || "themeA";

// Import động layout từ thư mục theme tương ứng
const ThemeLayout = require(`../themes/${themeKey}/layout`).default;
//  ← layout bao bọc tất cả
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeLayout>{children}</ThemeLayout>
      </body>
    </html>
  );
}
