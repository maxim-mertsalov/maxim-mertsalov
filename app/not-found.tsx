import Link from 'next/link'
import { SpecLink } from '@components/btn/link'
 
export const metadata = {
  title: "Not Found"
}

export default function NotFound() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10vh"}}>
        <div>
            <h2 className='bl'>{">"} Not Found</h2>
            <p className='gr'>{"//"} Could not find requested resource</p>
            <p className='gr'>{"//"} You can return <SpecLink isLocal href="/">_home page</SpecLink></p>
        </div>
    </div>
  )
}