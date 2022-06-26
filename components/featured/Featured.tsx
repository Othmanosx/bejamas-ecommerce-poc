import { DocumentData } from 'firebase/firestore'
import Details from './Details'
import TopPost from './TopPost'

type Props = {
  featuredProducts: DocumentData[]
}
const Featured = ({ featuredProducts }: Props) => {
  return (
    <section>
      <TopPost featuredProducts={featuredProducts[0]} />
      <Details featuredProducts={featuredProducts} />
    </section>
  )
}

export default Featured
