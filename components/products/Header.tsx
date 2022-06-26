import FiltersLogo from 'assets/FiltersLogo'
import SortArrows from 'assets/SortArrows'
import { Dispatch, SetStateAction } from 'react'
import useMediaQuery from 'utils/useMediaQuery'
import products from './products.module.scss'

type Props = {
  orderItemsBy: string
  setOrderItemsBy: Dispatch<SetStateAction<'price' | 'name'>>
  order: string
  setOrder: Dispatch<SetStateAction<'desc' | 'asc'>>
}

const Header = ({ orderItemsBy, setOrderItemsBy, order, setOrder }: Props) => {
  const isDesktop = useMediaQuery('(min-width: 900px)')

  return (
    <header>
      <div className={products.headerContainer}>
        <h1 className={products.heading}>
          Photography / <span>Premium photos</span>
        </h1>
        {isDesktop ? (
          <div>
            <label onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
              <SortArrows /> Sort By{' '}
            </label>
            <select
              onChange={(e) =>
                setOrderItemsBy(e.target.value === 'price' ? 'price' : 'name')
              }
              value={orderItemsBy}
              className={products.select}
            >
              <option value="price">Price </option>
              <option value="name">Name </option>
            </select>
          </div>
        ) : (
          <FiltersLogo />
        )}
      </div>
    </header>
  )
}

export default Header
