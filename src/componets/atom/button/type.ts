export type ButtonProps = React.BaseHTMLAttributes<HTMLButtonElement>&{
  className?:string
  variants?:'primary' | 'secondary' | 'tertiary'
  variantType?:'outline' | 'fill'
 
  children:React.ReactNode | string
  loading?:boolean
}