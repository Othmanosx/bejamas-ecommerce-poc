import button from './button.module.scss'

type Props = {
  children: React.ReactNode | string | number
  fullWith?: boolean
  className?: string
}

const Button = ({ children, fullWith, className }: Props) => {
  return (
    <button
      style={{
        width: fullWith ? '100%' : 'auto',
      }}
      className={`${button.primary} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
