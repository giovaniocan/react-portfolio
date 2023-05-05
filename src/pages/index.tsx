import { Header } from '@/components/Header'
import { Presentation } from '@/components/Presentation/Presentation'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects/Projects'
import Head from 'next/head'
import { Skills } from '@/components/Skills'
import { Footer } from '@/components/Footer'
import { ReturTOHeader } from '@/components/ReturnToHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifólio</title>
      </Head>
      <div className=" w-11/12 max-w-6xl my-0 mx-auto pt-8 ">
        <Header />
        <Presentation />
        <About />
        <Projects />
        <Skills />
        <ReturTOHeader />
      </div>

      <Footer />
    </>
  )
}
