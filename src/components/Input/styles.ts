import styled, { css } from 'styled-components'

interface InputProps {
    inputsize?: 'medium' | 'small' | 'large';
}

export const InputSize = {
	medium: css`
        height: 2.5rem;
        font-size: 1rem;
	`,
    small: css`
        height: 2rem;
        font-size: 0.875rem;
	`,
	large: css`
        height: 3rem;
        font-size: 1.25rem;
	`,
};

export const InputDefault = styled.input<InputProps>`
    display: block;
    width: 400px;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.25rem;
    border: 1px solid;
    border-color: inherit;
    background-color: #fff;

    ${props => InputSize[props.inputsize || 'medium']}
`;
