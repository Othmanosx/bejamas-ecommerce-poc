import { CategoriesType, PricesType } from 'types/products'
import products from './products.module.scss'

type Props = {
  categories: CategoriesType
  setCategories: (categories: CategoriesType) => void
  prices: PricesType
  setPrices: (prices: PricesType) => void
}

const Filters = ({ categories, setCategories, prices, setPrices }: Props) => {
  const handlePriceFilter = (priceName: string, checked: boolean) => {
    const newPrices = prices.map((price) =>
      price.name === priceName
        ? { ...price, checked: checked }
        : { ...price, checked: false }
    )
    setPrices(newPrices)
  }
  return (
    <aside>
      <h4>Category</h4>
      <ul className={products.filtersContainer}>
        {categories.map((category, i) => (
          <li key={'category' + i}>
            <label className={products.filterItem} htmlFor={category.name}>
              <input
                type="checkbox"
                id={category.name}
                name={category.name}
                checked={category.checked}
                onChange={(e) => {
                  const newFilters = [...categories]
                  newFilters[i].checked = e.target.checked
                  setCategories(newFilters)
                }}
              />
              {category.name}
            </label>
            <br />
          </li>
        ))}
      </ul>
      <hr className={products.divider} />
      <h4>Price range</h4>
      <ul className={products.filtersContainer}>
        {prices.map((price, i) => (
          <li key={'price-range' + i}>
            <label className={products.filterItem} htmlFor={price.name}>
              <input
                type="checkbox"
                id={price.name}
                name={price.value}
                checked={price.checked}
                onChange={(e) =>
                  handlePriceFilter(price.name, e.target.checked)
                }
              />
              {price.name}
            </label>
            <br />
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Filters
