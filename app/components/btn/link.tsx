import Link from "next/link"
import s from './link.module.scss'

type SpecLinkType = {
    children: React.ReactNode,
    isLocal: boolean,
    href: string
}

export const SpecLink = ({children, isLocal=true, href="/"}: SpecLinkType) => {
    return(<span className={s.link}>
        {isLocal ? 
            <Link className={s.a} href={href}>{children}</Link> : 
            <a className={s.a} href={href}>{children}</a>
        }
        <a href={href} className={s.link_label}><span className="bl">Follow link</span>(click)</a>
        
    </span>)
}