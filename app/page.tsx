import './home.scss'
import { SpecLink } from '@components/btn/link'

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
    </>
  )
}
