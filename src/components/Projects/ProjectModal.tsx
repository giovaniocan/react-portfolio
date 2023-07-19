import Modal from 'react-modal'
import Image, { StaticImageData } from 'next/image'
import { X } from 'phosphor-react'

export type ProjectType = {
  title: string
  description: string
  techs: string[]
  image: StaticImageData
  github?: string
  deploy?: string
}

interface ContactModalProps {
  isOpen: boolean
  onRequestClose: () => void
  project: ProjectType
}

export function ProjectModal({
  isOpen,
  onRequestClose,
  project,
}: ContactModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal de exemplo"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black/80 "
      className=" p-8 bg-white border-2  border-green-500 rounded-lg  mx-4 w-full lg:w-5/12 lg:p-10 dark:bg-zinc-900 dark:border"
    >
      <button className=" lg:ml-96 pl-72 " onClick={onRequestClose}>
        <X size={30} className=" -mr-6 -mt-10  dark:text-zinc-500 " />
      </button>
      <div className=" flex flex-col gap-4 ">
        <header className=" flex flex-col items-center  gap-6 ">
          <h1 className=" text-4xl font-medium ">{project.title}</h1>
          <Image src={project.image} width={500} height={250} alt="" />
        </header>
        <span className=" mt-2 text-xl  dark:text-zinc-400 ">
          {project.description}
        </span>
        <div>
          <h2 className=" text-3xl font-medium  ">Technologies</h2>
          <span className=" mt-6 text-xl  dark:text-zinc-400 ">
            {project.techs.join(', ')}
          </span>
        </div>
        <div>
          <h2 className=" text-3xl font-medium  ">Links</h2>
          <div>
            {project.github ? (
              <a
                href={project.github}
                className=" mt-6 text-xl dark:text-zinc-400 cursor-pointer underline underline-offset-2 mr-4"
              >
                Github
              </a>
            ) : (
              ''
            )}
            {project.deploy ? (
              <a
                href={project.deploy}
                className=" mt-6 text-xl dark:text-zinc-400 cursor-pointer underline underline-offset-2 "
              >
                Deploy
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}
