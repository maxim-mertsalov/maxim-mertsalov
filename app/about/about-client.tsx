"use client"

import React, { useEffect, useState } from 'react'
import data from '@/about/about_db.json'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import parse from 'html-react-parser';
import Icon from '../components/icons';


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

export default function AboutClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const current = new URLSearchParams(Array.from(searchParams.entries())); 

  const fileParam = current.get("file");
  const titleParam = current.get("title");


  const [activeApp, setActiveApp] = useState(0) //0, 1, 2
  const [hideApp, setHideApp] = useState(false)

  const [activeFile, setActiveFile] = useState<FileType>({
    type: "file",
    path: fileParam || "readme.md",
    title: titleParam || "readme.md",
    lang: "md",
  })

  const [activeFolders, setActiveFolders] = useState<number[]>([])

  const [activeBody, setActiveBody] = useState<string[]>([])

  const [loaded, setLoaded] = useState(false);

  const redUrl = async () => {
    if (!loaded) {
      if (!fileParam || !titleParam) {
        router.push(`${pathname}?file=${activeFile.path}&title=${activeFile.title}`);
      }
      const data = await getData(activeFile.path as string, activeFile.title as string)
      if (data.status != 200) {
        setActiveBody(["Data not found!"])
      }
      else{
        // console.log(data.data.split("\n"))
        setActiveBody(data.data.split("\n"))
        setLoaded(true)
      }
    }
  }

  const getData = async (url: string, title: string) => {
    const data = await fetch(`/api/about?dir=${url}`)
    router.push(`${pathname}?file=${url}&title=${title}`);
    return data.json()
  }
  
  useEffect(() => {redUrl()})
  
  const setActiveAppHundler = (app: number) => {
    // console.log(activeApp, app, hideApp)
    if (activeApp == app) {
      setHideApp(!hideApp)
    }
    else{
      setHideApp(false)
      setActiveApp(app)
    }
  }

  return (
    <>
      <div className='ab-wrap'>
        <div className='apps'>
          <div title='files' className={`el ${activeApp === 0 && "active"} ${hideApp && "hidden"}`} onClick={() => {setActiveAppHundler(0)}}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_64_2711)">
                <path d="M3 3.65186H21C21.2652 3.65186 21.5196 3.75721 21.7071 3.94475C21.8946 4.13228 22 4.38664 22 4.65186V20.6519C22 20.9171 21.8946 21.1714 21.7071 21.359C21.5196 21.5465 21.2652 21.6519 21 21.6519H3C2.73478 21.6519 2.48043 21.5465 2.29289 21.359C2.10536 21.1714 2 20.9171 2 20.6519V4.65186C2 4.38664 2.10536 4.13228 2.29289 3.94475C2.48043 3.75721 2.73478 3.65186 3 3.65186ZM12 15.6519V17.6519H18V15.6519H12ZM8.414 12.6519L5.586 15.4799L7 16.8949L11.243 12.6519L7 8.40886L5.586 9.82386L8.414 12.6519Z" fill="#607B96"/>
              </g>
              <defs>
                <clipPath id="clip0_64_2711">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.651855)"/>
                </clipPath>
              </defs>
            </svg>

          </div>
          <div title='search' className={`el ${activeApp === 1 && "active"} ${hideApp && "hidden"}`} onClick={() => {setActiveAppHundler(1)}}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_64_2708)">
                <path d="M5 20.6519H19V22.6519H5V20.6519ZM12 18.6519C9.87827 18.6519 7.84344 17.809 6.34315 16.3087C4.84285 14.8084 4 12.7736 4 10.6519C4 8.53012 4.84285 6.49529 6.34315 4.995C7.84344 3.49471 9.87827 2.65186 12 2.65186C14.1217 2.65186 16.1566 3.49471 17.6569 4.995C19.1571 6.49529 20 8.53012 20 10.6519C20 12.7736 19.1571 14.8084 17.6569 16.3087C16.1566 17.809 14.1217 18.6519 12 18.6519Z" fill="#607B96"/>
              </g>
              <defs>
                <clipPath id="clip0_64_2708">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.651855)"/>
                </clipPath>
              </defs>
            </svg>

          </div>
          <div title='hobbies' className={`el ${activeApp === 2 && "active"} ${hideApp && "hidden"}`} onClick={() => {setActiveAppHundler(2)}}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_64_2705)">
                <path d="M17 4.87793C18.5913 4.87793 20.1174 5.51007 21.2426 6.63529C22.3679 7.76051 23 9.28663 23 10.8779V14.8779C23 16.4692 22.3679 17.9954 21.2426 19.1206C20.1174 20.2458 18.5913 20.8779 17 20.8779H7C5.4087 20.8779 3.88258 20.2458 2.75736 19.1206C1.63214 17.9954 1 16.4692 1 14.8779V10.8779C1 9.28663 1.63214 7.76051 2.75736 6.63529C3.88258 5.51007 5.4087 4.87793 7 4.87793H17ZM10 9.87793H8V11.8779H6V13.8779H7.999L8 15.8779H10L9.999 13.8779H12V11.8779H10V9.87793ZM18 13.8779H16V15.8779H18V13.8779ZM16 9.87793H14V11.8779H16V9.87793Z" fill="#607B96"/>
              </g>
              <defs>
                <clipPath id="clip0_64_2705">
                  <rect width="24" height="24" fill="white" transform="translate(0 0.87793)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className={`s_section ${activeApp == 0 ? "files" : "other_app"} ${hideApp == true && "hidden"}`}>

          {activeApp == 0 && 
          <MapFiles items={data as any} setActiveFile={setActiveFile} activeFile={activeFile} dir_level={0} setActiveFolders={setActiveFolders} activeFolders={activeFolders} setLoaded={setLoaded}/>}
          {activeApp != 0 && <>Coming soon</>}

        </div>

        <div className='code-ed'>
          <div className='code-tabs gr'>
            {"./"}{activeFile.path}
          </div>
          <ol className='code'>
            {loaded ? activeBody.map((el, i) => <li key={i}>{parse(el)}</li>) : <li className='gr'>Loading...</li>}
          </ol>
        </div>
        <div className='snippets'></div>
      </div>
    </>
  )
}

type MapFilesType = {
  items: (FolderType | FileType)[],
  setActiveFile: React.Dispatch<React.SetStateAction<FileType>>,
  activeFile: FileType,
  dir_level: number // from 0,
  setActiveFolders: React.Dispatch<React.SetStateAction<number[]>>,
  activeFolders: number[],
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>,
}

const MapFiles = (props: MapFilesType) => {
  const ifFile = (el: FileType) => {
    props.setActiveFile(el); 
    props.setLoaded(false)
  }

  const maxFiles = 100;
  return(<>
    {props.items.map((el, i) => <div style={{marginLeft: props.dir_level == 0 ? 0 : props.dir_level * 3 + 12}} key={(props.dir_level * maxFiles) + i} className={`files ${props.dir_level > 0 && "sub_files"} ${i == 0 && "first_item"} ${i == (props.items.length - 1) && "last_item"}`}>

      <div style={{paddingLeft: props.dir_level == 0 ? 6 : props.dir_level * 6, marginLeft: props.dir_level == 0 ? 0 : 3}} onClick={() => el.type == "file" ? 
          ifFile(el) : 
          props.activeFolders.includes((props.dir_level * maxFiles) + i) ? 
          props.setActiveFolders(props.activeFolders.filter(el => el != ((props.dir_level * maxFiles) + i))) : 
          props.setActiveFolders([...props.activeFolders, ((props.dir_level * maxFiles) + i)])
        } 
        className={`f_item ${el.type == "file" ? "file" : "folder"} ${(el.type == "file" && el.path == props.activeFile.path && el.title == props.activeFile.title) && "active"}`} 
      >
        <div className={`f_icon ${el.type == "file" && "file"} ${props.activeFolders.includes((props.dir_level * maxFiles) + i) && "active_folder"}`}>
          <Icon name='arrow-right'/>
          <Icon name={el.type == "file" ? "file" : "folder"}/>
        </div>
        <div className='file_title'>
          <span>{el.title}</span>
        </div>
      </div>

      {(el.type == "folder" && props.activeFolders.includes((props.dir_level * maxFiles) + i)) && <MapFiles dir_level={props.dir_level + 1} items={el.items as any} setActiveFile={props.setActiveFile} activeFile={props.activeFile} setActiveFolders={props.setActiveFolders} activeFolders={props.activeFolders} setLoaded={props.setLoaded}/>}
    </div>)}
  </>)
}

