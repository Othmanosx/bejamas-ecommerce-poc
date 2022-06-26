import Image from 'next/image'
import featured from './featured.module.scss'
import bytesToSize from 'utils/bytesToSize'
import { DocumentData } from 'firebase/firestore'
import { Image as ImageType } from 'types/database'

type Props = {
  featuredProducts: DocumentData[]
}

const Details = ({ featuredProducts }: Props) => {
  const featuredProduct = featuredProducts[0]
  const recommendedProducts = featuredProduct?.details?.recommendations
  const dimensions = featuredProduct.details?.dimensions

  return (
    <div className={featured.detailsContainer}>
      <article>
        <h2>{featuredProduct?.name}</h2>
        <h3>{featuredProduct?.category}</h3>
        <p>{featuredProduct?.details?.description}</p>
      </article>
      <aside className={featured.related}>
        <h2>People also buy</h2>
        <ul className={featured.relatedItems}>
          {recommendedProducts?.map((product: ImageType) => (
            <li key={product.alt}>
              <Image
                src={product.src}
                layout="fill"
                objectFit="cover"
                alt={product.alt}
              />
            </li>
          ))}
        </ul>
        <h2>Details</h2>
        <p>{`Size: ${dimensions?.height} x ${dimensions?.width} pixel`}</p>
        <p>{`Size: ${bytesToSize(featuredProduct?.details?.size)}`}</p>
      </aside>
    </div>
  )
}

export default Details
