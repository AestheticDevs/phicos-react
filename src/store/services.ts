import SoftdevImg from '@/assets/image/sofdev.png'
import MulmedImg from '@/assets/image/mulmed.png'
import ServerImg from '@/assets/image/server.png'
import WebMobileImg from '@/assets/image/mobile.png'
import GraphicDesignImg from '@/assets/image/graph-design.png'
import ConsultingImg from '@/assets/image/consulting.png'

interface Service {
  img: string,
  title: string,
  description: string
}

export const services: Service[] = [
  {
    img: SoftdevImg,
    title: 'Software Development',
    description: 'Provides development and support to information systems, based on the needs collected and documented by the system analyst.'
  },
  {
    img: MulmedImg,
    title: 'Multimedia',
    description: 'Providing support for innovation and creation of multimedia content services in various forms to facilitate the delivery of information.'
  },
  {
    img: ServerImg,
    title: 'Networking Server',
    description: 'Provides computer network communication support to ensure smooth operation and maximum performance for information system users.'
  },
  {
    img: WebMobileImg,
    title: 'Web & Mobile Development',
    description: 'Quickly and efficiently building cutting-edge enterprise responsive Web and mobile experiences.'
  },
  {
    img: GraphicDesignImg,
    title: 'Graphics Design',
    description: 'Our creations are designed to convey your company’s unique personality and attract those who believe in the same vision as you.'
  },
  {
    img: ConsultingImg,
    title: 'Technology Consulting',
    description: 'Helps Advise Clients How To Best Use IT Practices To Achieve Their Business Goals By Managing And Implementing Strategies.'
  }
]