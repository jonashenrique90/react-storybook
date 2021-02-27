import { InputHTMLAttributes } from 'react';
import { InputDefault } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputsize?: 'medium' | 'small' | 'large';
}

const Input = ({inputsize = 'medium', ...rest}: InputProps) => {
    return (
        <InputDefault  inputsize={inputsize} {...rest}></InputDefault>
    )
}

export default Input
