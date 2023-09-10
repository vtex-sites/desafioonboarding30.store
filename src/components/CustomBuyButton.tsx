import React from 'react'
import { Button as UIButton, ButtonProps } from '@faststore/ui'
 
export function CustomBuyButton(props: ButtonProps) {
  return (
    <UIButton
      {...props}
      variant="primary"
      onClick={(event) => {
        alert('Edu maravilhoso!')
        props.onClick?.(event)
      }}
    >
      New Buy Button
    </UIButton>
  )
}

//cria botao custom de buy