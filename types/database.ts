export interface Dimensions {
  width: number
  height: number
}

export interface Details {
  dimensions: Dimensions
  size: number
  description: string
  recommendations: Image[]
}

export interface Image {
  alt: string
  src: string
}

export interface Product {
  name: string
  category: string
  price: number
  currency: string
  image: Image
  bestseller: boolean
  featured: boolean
  details?: Details
}
