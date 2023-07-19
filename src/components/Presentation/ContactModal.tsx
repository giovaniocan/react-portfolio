import Modal from 'react-modal'
import { Phone, X, EnvelopeSimple, LinkedinLogo } from 'phosphor-react'
import Image from 'next/image'

interface ContactModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function ContactModal({ isOpen, onRequestClose }: ContactModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal de exemplo"
      overlayClassName="fixed inset-0 flex items-center justify-center bg-black/80 "
      className=" p-6 bg-white border-2  border-green-500 rounded-lg  mx-6 w-full lg:w-1/3 lg:p-10 dark:bg-zinc-900 dark:border"
    >
      <div className=" flex justify-between items-center mt-2">
        <h1 className=" text-3xl font-medium ">Contacts</h1>
        <button onClick={onRequestClose}>
          <X size={30} className=" -mr-6 -mt-10 text-zinc-500 " />
        </button>
      </div>

      <div className="flex flex-col lg:w-full mt-8 gap-6 ">
        <div className=" bg-zinc-200 p-5 rounded dark:bg-zinc-800 text-zinc-400">
          <div className="flex items-center gap-4">
            <Phone size={30} color="#00DF5E" />
            <span className=" text-xl font-light text-zinc-700 dark:text-zinc-400 ">
              55 - (44) 99842-8989
            </span>
          </div>
        </div>
        <div className=" bg-zinc-200 p-5 rounded dark:bg-zinc-800 text-zinc-400">
          <div className="flex items-center gap-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              width={30}
              height={30}
              alt="git hub logo"
            />
            <a
              href="https://github.com/giovaniocan"
              className="text-xl font-light cursor-pointer underline underline-offset-2 text-zinc-700 dark:text-zinc-400"
            >
              giovaniocan
            </a>
          </div>
        </div>
        <div className=" bg-zinc-200 p-5 rounded dark:bg-zinc-800 text-zinc-400 ">
          <div className="flex items-center gap-4">
            <EnvelopeSimple size={30} color="#00DF5E" />
            <span className=" text-xl text-zinc-700 dark:text-zinc-400 font-light">
              giovaniocan@gmail.com
            </span>
          </div>
        </div>
        <div className=" bg-zinc-200 p-5 rounded dark:bg-zinc-800 text-zinc-400">
          <div className="flex items-center gap-4">
            <LinkedinLogo size={30} color="#00DF5E" />
            <a
              href="https://www.linkedin.com/in/giovani-ocan/"
              className="text-xl font-light cursor-pointer underline  underline-offset-2 text-zinc-700 dark:text-zinc-400"
            >
              Giovani Apolinario Ocan
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
}
