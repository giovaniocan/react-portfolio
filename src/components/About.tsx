/* eslint-disable react/no-unescaped-entities */
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'

export function About() {
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
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className=" w-full flex flex-col items-center justify-center "
    >
      <h1 className=" mt-36 text-4xl leading-10 font-medium maxw ">About me</h1>
      <p className=" mt-10 px-6  text-center text-base lg:px-36 text-lg leading-8   dark:text-zinc-400  ">
        I'm a junior developer with a passion for technology with 4+ years of
        programming experience. I believe that programming has the power to
        transform people's lives and solve real problems. I seek constant
        learning and am excited to contribute to challenging projects, improving
        my skills and driving the team's progress.
      </p>
    </motion.div>
  )
}
