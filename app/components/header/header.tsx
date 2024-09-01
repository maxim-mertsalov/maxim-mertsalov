"use client"

import { useState } from "react"
import { NavLink } from "@components/btn/navlink"

export const Header = () => {
    const [active, setActive] = useState(false);

    return(
        <header>
            <div className='left'>
                <div className='logo'>maxim-mertsalov</div>
                <nav className='pc'>
                <NavLink href="/">_hello</NavLink>
                <NavLink href="/about">_about_me</NavLink>
                <NavLink href="/projects">_projects</NavLink>
                </nav>
            </div>
            <div className='burger'>
                <div className="burg" onClick={() => setActive(true)}>
                    <svg viewBox="0 0 16 16" version="1.0.0" width="16" height="16">
                        <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                    </svg>
                </div>
               
            </div>
            <nav className={`mobile ${active && "active"}`}>
                <div className="close" onClick={() => setActive(false)}>
                    <svg height="16" viewBox="0 0 16 16" version="1.0.0" width="16">
                        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                    </svg>
                </div>
                <NavLink onClick={() => setActive(false)} href="/">_hello</NavLink>
                <NavLink onClick={() => setActive(false)} href="/about">_about_me</NavLink>
                <NavLink onClick={() => setActive(false)} href="/projects">_projects</NavLink>
                <NavLink onClick={() => setActive(false)} href="/contact">_contact_me</NavLink>
            </nav>
            <nav className='pc'>
                <NavLink href="/contact">_contact_me</NavLink>
            </nav>
        </header>
    )
}