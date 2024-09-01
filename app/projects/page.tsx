import ProjectsClient from './projects-client';
import './projects.scss'

export const metadata = {
  title: "My Projects"
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsClient/>
    </>
  )
}