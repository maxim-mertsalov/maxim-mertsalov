import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.scss";
import { Header } from "@components/header/header";

const fira_code = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Maxim Mertsalov portfolio website',
    template: '%s | Maxim Mertsalov'
  },
  description: 'I am Maxim Mertsalov - fullstack web developer. I am good at creating websites, making good adaptation for them, setting up websites for SEO services so that the sites are perfectly indexed. I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines',
  openGraph: {
    title: 'Maxim Mertsalov portfolio website',
    siteName: 'Maxim Mertsalov portfolio website',
    description: 'Created by Maxim Mertsalov',
    url: "https://maxim-mertsalov.vercel.app/",
    type: "website",
    locale: "en"
  },
  verification: {
    google: "google-site-verification=7jDV39ogN1lCnxOb6tD4vSRVOlmtemM0pnc_8vz_V_k"
    //<meta name="google-site-verification" content="7jDV39ogN1lCnxOb6tD4vSRVOlmtemM0pnc_8vz_V_k" />
  },
  other: {
    "google-site-verification": "7jDV39ogN1lCnxOb6tD4vSRVOlmtemM0pnc_8vz_V_k"
  },
  keywords: ["Maxim Mertsalov", "Fullstack", "website", "developer", "webdeveloper", "webdevelopment", "web","fullstack web development", "create website", "buy website", "web servises", "nextjs", "reactjs", "rust", "contact form", "website automatisation", "website integration", "frontend web development", "backend web development", "web programming", "web development services"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira_code.className}>
        <div className='body'>
          <Header/>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
