import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.scss";
import { Header } from "@components/header/header";
import Script from "next/script";

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
        <Script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@graph":[
              {
                "@type":"ProfilePage",
                "headline":"Maxim Mertsalov, Fullstack Web Developer",
                "url":"https://maxim-mertsalov.vercel.app/",
                "@id":"https://maxim-mertsalov.vercel.app/",
                "inLanguage":"en",
                "mainEntity":{"@id":"https://maxim-mertsalov.vercel.app/"},
                "isPartOf":{
                  "@type":"WebSite",
                  "name":"Fullstack web development | All types of sites for you ",
                  "url":"https://maxim-mertsalov.vercel.app/",
                  "@id":"https://maxim-mertsalov.vercel.app/",
                  "publisher":{
                    "@type":"Organization",
                    "name":"Maxim Mertsalov",
                    "url":"https://maxim-mertsalov.vercel.app/",
                    "@id":"https://maxim-mertsalov.vercel.app/"    
                  }
                }
              },
              {
                "@type":"Person",
                "name":"Maxim Mertsalov",
                "url":"https://maxim-mertsalov.vercel.app/",
                "@id":"https://maxim-mertsalov.vercel.app/",
                "worksFor":{"@id":"https://maxim-mertsalov.vercel.app/"},
                "jobTitle":{
                  "@type":"DefinedTerm",
                  "name":"Fullstack Web Developer",
                  "alternateName":"Web Developer",
                  "sameAs":"https://resources.workable.com/senior-web-developer-job-description"
                },
                "knowsLanguage":["english","russian","ukrainian","slovak"],
                "knowsAbout":[
                  {
                    "@type":"Thing",
                    "name":"NextJS",
                    "alternateName":"Next JS",
                    "@id":"https://nextjs.org/"
                  },
                  {
                    "@type":"Thing",
                    "name":"Rust",
                    "alternateName":"Rust Language",
                    "@id":"https://www.rust-lang.org/"
                  },
                  {
                    "@type":"Thing",
                    "name":"SEO",
                    "alternateName":"Search Engine Optimization",
                    "@id":"https://en.wikipedia.org/wiki/Search_engine_optimization"
                  },
                  {
                    "@type":"Thing",
                    "name":"Schema.org",
                    "alternateName":"Schemas for websites",
                    "@id":"https://schema.org/"
                  },
                  {
                    "@type":"Thing",
                    "name":"Google API",
                    "alternateName":"Google cloud api",
                    "@id":"https://developers.google.com/explorer-help"
                  },
                  {
                    "@type":"Thing",
                    "name":"Database",
                    "alternateName":"DB",
                    "@id":"https://en.wikipedia.org/wiki/Database"
                  },
                  {
                    "@type":"Thing",
                    "name":"client-server architecture",
                    "alternateName":"CSA",
                    "@id":"https://en.wikipedia.org/wiki/Client%E2%80%93server_model"
                  }
                ]
              }
              ]
            }
            `
          }}
        />
      </body>
    </html>
  );
}
