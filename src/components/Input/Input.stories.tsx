import React from 'react'
import Input from './Input'

export default {
    title: 'form/Input',
    component: Input
}

export const Small = () => <Input inputsize='small' placeholder='Small size' />
export const Medium = () => <Input inputsize='medium' placeholder='Medium size' />
export const Large = () => <Input inputsize='large' placeholder='Large size' />


Small.storyName = 'Small Input'