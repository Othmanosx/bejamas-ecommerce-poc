import Button from 'components/button'
import Image from 'next/image'
import featured from './featured.module.scss'
import useMediaQuery from 'utils/useMediaQuery'
import { DocumentData } from 'firebase/firestore'

type Props = {
  featuredProducts: DocumentData
}

const TopPost = ({ featuredProducts }: Props) => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const isDesktop = !isMobile

  return (
    <div>
      <div className={featured.postHeader}>
        <h1>{featuredProducts?.name}</h1>
        {isDesktop && <Button>add to cart</Button>}
      </div>
      <div className={featured.imgContainer}>
        <Image
          priority
          src={featuredProducts?.image?.src}
          layout="responsive"
          width={featuredProducts?.details?.dimensions?.width}
          height={featuredProducts?.details?.dimensions?.height}
          objectFit="contain"
          alt={featuredProducts?.image?.alt}
        />
        <p>Photo of the day</p>
      </div>
      {isMobile && <Button fullWith>add to cart</Button>}
    </div>
  )
}

export default TopPost
