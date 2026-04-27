import "./globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google';
import AOSProvider from "@/components/AOSProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200','300','400','500','600','700','800'],
  variable: "--font-jakarta",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jakarta.className} h-full antialiased`}
    >
      <body className="w-full min-h-screen overflow-x-hidden">
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}