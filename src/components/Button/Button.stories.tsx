import React, { ReactNode } from 'react'
import Button from './Button'
import { Story } from '@storybook/react';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    children: ReactNode;
}

export default {
    title: 'form/Button',
    component: Button,
    args: {
        children: 'Button'
    }
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template: Story<ButtonProps> = (args: any) => <Button {...args}></Button>

export const PrimaryA = Template.bind({})

PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})

LongPrimaryA.args = {
    ...PrimaryA,
    children: 'Long Primary Args'
}

export const SecondaryA = Template.bind({})

SecondaryA.args = {
    variant: 'secondary',
    // children: 'Secondary Args'
}