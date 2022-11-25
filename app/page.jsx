import Image from 'next/image'
import styles from './page.module.scss'
import imageDesktop from '../public/images/image-header-desktop.jpg'
import imageMobile from '../public/images/image-header-mobile.jpg'

// init font
import { Inter } from '@next/font/google'
import { Lexend_Deca } from '@next/font/google'

const inter = Inter({
  weight: ['400', '700']
})

const lexendDeca = Lexend_Deca({
  weight: '400'
})

// components
function StatsItem({ total, name }) {
  return (
    <div>
      <h2 className={inter.className}>{total}</h2>
      <p className={lexendDeca.className}>{name}</p>
    </div>
  )
}

function Stats() {
  return (
    <div className={styles.stats}>
      <StatsItem total="10k+" name="COMPANIES" />
      <StatsItem total="314" name="TEMPLATES" />
      <StatsItem total="12M+" name="QUERIES" />
    </div>
  )
}

function Description() {
  return (
    <div className={styles.description}>
      <div>
        <h1 className={inter.className}>Get <span>insights</span> that help your business grow.</h1>
        <p className={lexendDeca.className}>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
      </div>

      <Stats />
    </div>
  )
}

function CardImage() {
  return (
    <div className={styles.cardImage}>
      <div className={styles.overlay}></div>
      <Image src={imageDesktop} alt='Image' className={styles.imageDesktop} />
      <Image src={imageMobile} alt='Image' className={styles.imageMobile} />
    </div>
  )
}


function Card() {
  return (
    <div className={styles.card}>
      <Description />
      <CardImage />
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Card />
    </div>
  )
}
