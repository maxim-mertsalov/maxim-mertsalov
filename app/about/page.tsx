import { Metadata } from 'next'
import AboutClient from './about-client'
import './about.scss'

export const metadata: Metadata = {
  title: "About Me"
}

export default function AboutPage() {
  return (<AboutClient/>)
}
