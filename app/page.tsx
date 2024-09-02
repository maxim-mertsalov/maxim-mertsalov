import './home.scss'
import { SpecLink } from '@components/btn/link'
import Script from "next/script";

export default function HomePage() {
  return (
    <>
      <div className="m-wrap">
        <div className="home-wr">
          <div className="text-bl">
            <h6>Hi all. I am</h6>
            <h1>Maxim Mertsalov</h1>
            <h3>{">"} Fullstack developer</h3>
            <p>{"//"} more info about me you can see on <SpecLink isLocal href={"/about"}>_about-me</SpecLink> page</p>
            <p>{"//"} you can also see my Github page</p>
            <p><span className='rd'>const</span> <span className='wt'>githubLink</span> <SpecLink isLocal={false} href='https://github.com/maxim-mertsalov'>= “https://github.com/maxim-mertsalov</SpecLink></p>
          </div>
        </div>
      </div>
      <Script 
        id='ld+json'
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
                  "@type":"Person",
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
    </>
  )
}
