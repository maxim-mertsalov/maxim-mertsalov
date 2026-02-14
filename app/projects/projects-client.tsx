"use client"

import './projects.scss'
import data from './projects.json'
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectsClient() {
  const [prjHide, setPrjHide] = useState(true);
  
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  
  data.map((el, i) => {
    el.category.map(cat => {
      if (!allCategories.includes(cat)) {
        setAllCategories([...allCategories, cat])
      }
    })
  })
  // console.log(allCategories)

  const setActiveCategory = (val: string) => {
    if (activeCategories.includes(val)) {
      const filtered = activeCategories.filter(el => el != val)
      setActiveCategories(filtered)
    }
    else{
      setActiveCategories([...activeCategories, val])
    }
  }

  let projectsData = data.filter(el => {
    let skip = false;
    el.category.map(cat => {
      if (activeCategories.length == 0 || activeCategories.includes(cat)) {
        skip = true
      }
      else{
        // skip = false
      }
    })
    return skip
  });
  projectsData.reverse();
  // console.log(projectsData)

  return (
    <>
      <div className='prj-wrap'>
        <div className={`prj-cat  ${prjHide && "hide"}`}>
          <div className='prj-tt' onClick={() => setPrjHide(!prjHide)}>projects</div>
          <div className={`prj-cats`}>
            {allCategories.map((el, i) => <div key={i}>
              <input value={el} checked={activeCategories.includes(el)} onChange={(e) => setActiveCategory(el)} type='checkbox' name={`sort_cat_${el}`} id={`sort_cat_${el}`}/>
              <label htmlFor={`sort_cat_${el}`}>{el}</label>
              </div>)}
          </div>
        </div>
        <div className='prjcts'>
          <div className='code-tabs'></div>
          <div className='objects'>
            <div className='o-wrap'>
              {projectsData.length > 0 && projectsData.map(el => (<div key={el.id} className='project'>
                <div className='p-tt'>Project {el.id} <span>{"//"} {el.title}</span></div>
                <div className='p-card'>
                  <div className='div'><Image priority={true} src={el.preview || "/template-project.png"} width={380} height={150} alt={el.title + " image"}/></div>
                  <div className='hashtags'>
                    {el.category.map((hs, i) => <a key={i} href={`#${hs}`}>{`#${hs}`}</a>)}
                  </div>
                  <p>{el.desc}</p>
                  <a target='_blank' className='btnp' href={el.link}>view-project</a>
                </div>
              </div>))}
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}