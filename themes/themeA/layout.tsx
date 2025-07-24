// themes/themeA/app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theme A",
  description: "Giao diện Theme A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <header className="bg-blue-500 text-white p-4">Header Theme A</header>
        <main className="p-6">{children}</main>
        <footer className="bg-gray-200 text-center p-4">Footer Theme A</footer>
      </body>
    </html>
  );
}
