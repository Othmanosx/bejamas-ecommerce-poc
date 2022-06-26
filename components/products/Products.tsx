import useMediaQuery from 'utils/useMediaQuery'
import { DocumentData } from 'firebase/firestore'
import Filters from './Filters'
import Header from './Header'
import ProductsList from './ProductsList'
import products from './products.module.scss'
import useProductsList from 'utils/useProductsList'

type Props = {
  productsArray: DocumentData[]
}

const Products = ({ productsArray }: Props) => {
  const isDesktop = useMediaQuery('(min-width: 900px)')
  const {
    productsList,
    categories,
    setCategories,
    prices,
    setPrices,
    orderItemsBy,
    setOrderItemsBy,
    order,
    setOrder,
    loading,
  } = useProductsList(productsArray)

  return (
    <>
      <Header
        orderItemsBy={orderItemsBy}
        setOrderItemsBy={setOrderItemsBy}
        order={order}
        setOrder={setOrder}
      />
      <div className={products.container}>
        {isDesktop && (
          <Filters
            categories={categories}
            prices={prices}
            setCategories={setCategories}
            setPrices={setPrices}
          />
        )}
        <ProductsList loading={loading} productsList={productsList} />
      </div>
    </>
  )
}

export default Products
