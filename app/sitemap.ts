import data from "@/about/about_db.json"
import { siteData } from "./config";

const baseUrl = siteData.baseUrl;

export default async function sitemap(){

    // const aboutArticles = data.map(cat => (
    //     cat.map(el => ({
    //         url:`${baseUrl}/about?cat=${data.indexOf(cat)}&amp;file=${el.title}`,
    //         lastModified: new Date()
    //     }))
    // ));

    // const aboutArticlesFiltered = [...aboutArticles[0], ...aboutArticles[1], ...aboutArticles[2]]

    let artData: any[] = []

    const articleData = parceAboutData(data as any)
    const articleDataParced =  articleData?.map((el: any) => {
        if (el.length > 0) {
            el.map((arr: any) => {
                artData.push({
                    url: arr.url,
                    lastModified: arr.lastModified
                })
            })
        }
        else{
            
            artData.push({
                url: el.url,
                lastModified: el.lastModified
            })

            
        }
    })

    const staticUrls = [
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
    ]
    // console.log([...staticUrls, ...artData])

    return[
        ...staticUrls,
        ...artData
    ]
}

type FileType = {
    type: "file"
    title: string,
    lang?: string,
    path?: string
}

type FolderType = {
    type: "folder",
    title: string,
    items?: (FolderType | FileType)[]
}

type SitemamElemType = {
    url: string,
    lastModified: Date
}

const parceAboutData = (list: (FileType|FolderType)[]) => {
    if (list.length == 0) {
        return;
    }
    let parced_list: any[] = list.map(el => el.type == "file" ? ({
        url: `${baseUrl}/about?file=${el.path}&amp;title=${el.title}`,
        lastModified: new Date()
    }) : parceAboutData(el.items as any))

    return parced_list
}