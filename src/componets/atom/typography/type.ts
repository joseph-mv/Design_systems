export type TypographyType={
    tag:keyof JSX.IntrinsicElements
    text:string,
    className?:string
    children?:React.ReactNode
    style?:React.CSSProperties
    role?:string
    aria_label?:string 
    aria_labelledby?:string
}