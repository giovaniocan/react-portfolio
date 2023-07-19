import igniteShopPng from '../../public/IgniteShop.png'
import CoffeDeliveryPng from '../../public/coffeeDelivery.png'
import lunaBusPng from '../../public/lunabus.png'
import designSystemPng from '../../public/designsystem.png'
import DevFinderPng from '../../public/devFinderPng.png'
import igniteCallPng from '../../public/IgniteCall.png'

export const projects = [
  {
    title: 'Ignite Call',
    description:
      'The Ignite Call project was built for scheduling appointments using a calendar with Google Agenda integration',
    techs: ['React', 'Next.js', 'Node', 'Google APIs', 'Axios', 'TypeScript'],
    image: igniteCallPng,
    github: 'https://github.com/giovaniocan/ignite-call',
    deploy: 'https://ignite-call-smoky.vercel.app/',
  },
  {
    title: 'Ignite Shop',
    description: 'Website for selling Ignite items.',
    techs: ['React', 'TypeScript', 'Next', 'Stitches', 'Stripe'],
    image: igniteShopPng,
    github: 'https://github.com/giovaniocan/04-iginite-shop',
  },

  {
    title: 'Coffee Delivery',
    description: 'Website for managing a shopping cart.',
    techs: ['React', 'TypeScript', 'Styled-components'],
    image: CoffeDeliveryPng,
    github: 'https://github.com/giovaniocan/Coffee-Delivery',
  },
  {
    title: 'Luna Bus',
    description:
      'Website for public transportation focused on small and medium-sized cities.',
    techs: ['React', 'Next', 'TypeScript', 'Tailwind CSS'],
    image: lunaBusPng,
    deploy: 'https://lunabus.com.br',
  },
  {
    title: 'Design System Ignite Call',
    description:
      'Design System created for use in the Ignite Call application.',
    techs: ['React', 'StoryBook', 'Stitches', 'TypeScript'],
    image: designSystemPng,
    github: 'https://github.com/giovaniocan/05-design-system',
  },
  {
    title: 'Dev Finder',
    description:
      'Website for searching developers and companies on GitHub and showing their most relevant data.',
    techs: [
      'React',
      'TypeScript',
      'Styled-components',
      'Dark_Theme',
      'APIs',
      'Axios',
    ],
    image: DevFinderPng,
    github: 'https://github.com/giovaniocan/devFinder',
    deploy: 'https://dev-finder-woad.vercel.app/',
  },
]
