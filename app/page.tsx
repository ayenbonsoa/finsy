import Image from 'next/image'
import Button from './components/ui/Button'
import Badge from './components/ui/Badge'
import Card from './components/Card'

import 'remixicon/fonts/remixicon.css'
import Navbar from './Sections/Navbar/page'
import Hero from './Sections/Hero/page.'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}
