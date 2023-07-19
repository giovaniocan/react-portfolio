import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { ContactModal } from './ContactModal'

export function Presentation() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const controls = useAnimation()
  const [ref, inView] = useInView()

  const containerVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -200 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  function handleOpenContactModal() {
    setIsContactModalOpen(true)
  }

  function handleCloseContactModal() {
    setIsContactModalOpen(false)
  }
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      id="about"
      className=" mt-40 flex flex-col-reverse items-center lg:flex-row justify-between "
    >
      <div className=" max-w-xs">
        <h1 className=" text-4xl leading-10 font-medium maxw ">
          Hello, I am Giovani Ocan :)
        </h1>
        <h2 className=" mt-6 text-lg font-normal dark:text-zinc-400 ">
          Frontend Developer
        </h2>
        <div className=" w-full mt-8 flex items-center justify-stretch gap-3 ">
          <a
            href="/GiovaniOcanCV.pdf"
            className=" border border-zinc-400 dark:border-zinc-800 w-full text-sm p-3 flex items-center justify-center "
          >
            Download CV
          </a>
          <button
            onClick={handleOpenContactModal}
            className="  md:animate-pulse border border-zinc-400 dark:border-zinc-800 w-full text-sm p-3 bg-green-500 text-black "
          >
            Get in touch
          </button>
        </div>
      </div>
      <Image src="/boy.svg" alt="" width={300} height={255} />
      <ContactModal
        isOpen={isContactModalOpen}
        onRequestClose={handleCloseContactModal}
      />
    </motion.div>
  )
}
