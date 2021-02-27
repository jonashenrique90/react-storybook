import styled, { css } from 'styled-components'

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
}

export const ButtonVariations = {
	primary: css`
        background-color: #008cba;
	`,
    secondary: css`
        background-color: #e7e7e7;
	    color: black;
	`,
	success: css`
        background-color: #4caf50;
	`,
	danger: css`
        background-color: #f44336;
	`,
};

export const ButtonDefault = styled.button<ButtonProps>`
    border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	border-radius: 4px;
	cursor: pointer;

    ${props => ButtonVariations[props.variant || 'primary']}
`;