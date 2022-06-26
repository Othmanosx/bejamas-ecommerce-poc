import createFirebaseApp from 'firebase/firebase'
import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { CategoriesType, PricesType } from 'types/products'

const app = createFirebaseApp()
const db = getFirestore(app)

const useProductsList = (productsArray: DocumentData[]) => {
  const [loading, setLoading] = useState(false)
  const [orderItemsBy, setOrderItemsBy] = useState<'price' | 'name'>('price')
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [categories, setCategories] = useState<CategoriesType>([
    {
      name: 'People',
      checked: false,
    },
    {
      name: 'Premium',
      checked: false,
    },
    {
      name: 'Pets',
      checked: false,
    },
    {
      name: 'Food',
      checked: false,
    },
    {
      name: 'Landmarks',
      checked: false,
    },
    {
      name: 'Cities',
      checked: false,
    },
    {
      name: 'Nature',
      checked: false,
    },
  ])
  const [prices, setPrices] = useState<PricesType>([
    {
      value: '0-20',
      min: 0,
      max: 20,
      name: 'Lower than $20',
      checked: false,
    },
    {
      value: '20-100',
      min: 20,
      max: 100,
      name: '$20 - $100',
      checked: false,
    },
    {
      value: '100-200',
      min: 100,
      max: 200,
      name: '$100 - $200',
      checked: false,
    },
    {
      value: 'more than 200',
      min: 200,
      max: Infinity,
      name: 'More than $200',
      checked: false,
    },
  ])
  const [productsList, setProductsList] =
    useState<DocumentData[]>(productsArray)

  useEffect(() => {
    // handle filters
    const fetch = async () => {
      setLoading(true)
      // get selected price range
      const priceFilter = prices.filter((price) => price.checked)
      // get selected categories
      const categoriesFilter = categories
        .map((category) =>
          category.checked ? category.name.toLocaleLowerCase() : null
        )
        .filter((category) => category)
      // combine filters into one query and add selected filters to query
      const filtersQuery = [where('featured', '==', false)]
      if (priceFilter.length === 1) {
        const min = priceFilter[0].min
        const max = priceFilter[0].max
        filtersQuery.push(where('price', '>=', min))
        filtersQuery.push(where('price', '<=', max))
      }
      if (categoriesFilter.length >= 1) {
        filtersQuery.push(where('category', 'in', categoriesFilter))
      }
      if (order) {
        filtersQuery.push(orderBy(orderItemsBy, order))
      }
      // get filtered products from firestore
      const productsRef = collection(db, 'products')
      const q = query(productsRef, ...filtersQuery)
      const productsArray: DocumentData[] = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        productsArray.push(doc.data())
      })
      setProductsList(productsArray)
      setLoading(false)
    }
    fetch()
  }, [prices, categories, orderItemsBy, order])

  return {
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
  }
}

export default useProductsList
