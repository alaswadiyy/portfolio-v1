import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectSection from '@/components/ProjectSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <Footer/>
    </main>
  )
}
