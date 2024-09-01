import data from "@/about/about_db.json"
import { siteData } from "./config";

export default async function sitemap(){
    const baseUrl = siteData.baseUrl;

    // const aboutArticles = data.map(cat => (
    //     cat.map(el => ({
    //         url:`${baseUrl}/about?cat=${data.indexOf(cat)}&amp;file=${el.title}`,
    //         lastModified: new Date()
    //     }))
    // ));

    // const aboutArticlesFiltered = [...aboutArticles[0], ...aboutArticles[1], ...aboutArticles[2]]

    return[
        {
            url: `${baseUrl}`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date()
        },
        // ...aboutArticlesFiltered
    ]
}