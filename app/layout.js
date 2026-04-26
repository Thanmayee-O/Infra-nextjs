import "./globals.css";
import StaggerWrapper from '../components/StaggerWrapper';
import { Plus_Jakarta_Sans } from 'next/font/google';

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
      <body className="min-h-full flex flex-col">
        <StaggerWrapper>
          {children}
        </StaggerWrapper>
      </body>
    </html>
  );
}