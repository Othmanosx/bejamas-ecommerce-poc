import Image from 'next/image'
import products from './products.module.scss'
import Button from 'components/button'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import { DocumentData } from 'firebase/firestore'
import Loading from './Loading'
import NoProducts from './NoProducts'

type Props = {
  loading: boolean
  productsList: DocumentData[]
}

const ProductsList = ({ loading, productsList }: Props) => {
  const [page, setPage] = useState<number>(0)
  const page_size = 6
  const pageCount = Math.ceil(productsList?.length / page_size)

  if (loading) return <Loading />
  if (productsList.length === 0) return <NoProducts />
  return (
    <div className={products.productsContainer}>
      <ul className={products.products}>
        {productsList
          ?.slice(page * page_size, page * page_size + page_size)
          ?.map((product, i) => (
            <li key={i}>
              <div className={products.image}>
                {product?.bestseller && (
                  <div className={products.bestSeller}>Best Seller</div>
                )}
                <Image
                  src={product?.image?.src}
                  layout="fill"
                  objectFit="cover"
                  alt={product?.image?.alt}
                />
                <Button fullWith>Add to Cart</Button>
              </div>
              <div>
                <span className={products.category}>{product?.category}</span>
                <h2 className={products.productName}>{product?.name}</h2>
                <p className={products.price}>${product?.price}</p>
              </div>
            </li>
          ))}
      </ul>
      <ReactPaginate
        disabledClassName={'pagination-disabled'}
        breakLabel="•••"
        nextLabel="⌃"
        onPageChange={(page) => setPage(page.selected)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="⌃"
        containerClassName={'pagination'}
      />
    </div>
  )
}

export default ProductsList
