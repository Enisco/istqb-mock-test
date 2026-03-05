import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ISTQB CTFL 4.0 — Mock Exam',
  description: 'Practice exam for ISTQB Certified Tester Foundation Level 4.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
