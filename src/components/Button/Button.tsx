import { ReactNode } from "react"
import { ButtonDefault } from './styles'

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    children: ReactNode;
}

const Button = (props: ButtonProps) => {
    const { variant = 'primary', children, ...rest } = props
    return (
        <ButtonDefault variant={variant} {...rest}>{children}</ButtonDefault>
    )
}

export default Button
