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
    description: 'Memberikan inovasi dan dukungan maksimal untuk sistem informasi, memanfaatkan kebutuhan yang teliti dikumpulkan dan didokumentasikan oleh analis sistem.'
  },
  {
    img: ServerImg,
    title: 'Networking Server',
    description: 'Mengoptimalkan kinerja sistem informasi dengan dukungan komunikasi jaringan komputer, memastikan operasi yang lancar dan pengalaman pengguna yang maksimal.'
  },
  {
    img: MulmedImg,
    title: 'Multimedia',
    description: 'Mendukung kreasi inovatif layanan konten multimedia dalam beragam bentuk, mewujudkan penyampaian informasi dengan cara yang lebih menarik dan efektif.'
  },
  {
    img: WebMobileImg,
    title: 'Web & Mobile Development',
    description: 'Menghadirkan pengalaman Web dan mobile perusahaan yang paling mutakhir dengan cepat dan efisien.'
  },
  {
    img: GraphicDesignImg,
    title: 'Graphics Design',
    description: 'Karya kami dibuat untuk menggambarkan identitas unik perusahaan Anda, memikat mereka yang berbagi visi sejalan dengan Anda.'
  },
  {
    img: ConsultingImg,
    title: 'Technology Consulting',
    description: 'Membantu klien mengoptimalkan penggunaan praktik TI guna meraih tujuan bisnis terbaik, dengan mengelola dan mengimplementasikan strategi yang tepat.'
  }
]