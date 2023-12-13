import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nick Knighton's Portfolio",
  description:
    "Nick Knighton's personal portfolio is a dynamic showcase of his creative journey and professional accomplishments. Through carefully curated sections, the portfolio invites you to explore his diverse talents and experiences. Delve into his project portfolio, where he presents a collection of innovative works that reflect his problem-solving skills and creativity. Immerse yourself in his captivating photography portfolio, where his keen eye captures moments and stories from different perspectives.  As you navigate his portfolio, you'll also uncover a travel log documenting the countries he has visited, offering a glimpse into his adventures and global perspective. Beyond the captivating visuals, Nick's resume stands as a testament to his professional growth, displaying his skills, education, and career milestones.  With each section thoughtfully designed and meticulously crafted, Nick Knighton's portfolio not only showcases his expertise but also invites you to join him on a journey of exploration, creativity, and growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
