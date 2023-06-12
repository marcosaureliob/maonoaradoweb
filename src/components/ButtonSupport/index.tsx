import React from 'react'
import { ButtonSupportWrapper, TextButton } from './styles'
import { HandHeart } from '@phosphor-icons/react'

interface ButtonSupportProps {
  text: string
}

export const ButtonSupport = ({ text }: ButtonSupportProps) => {
  return (
    <ButtonSupportWrapper href="/contact">
      <TextButton>{text}</TextButton>
      <HandHeart size={40} />
    </ButtonSupportWrapper>
  )
}
