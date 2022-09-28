import React from 'react'
import { styled } from '../styles'

const Button = styled('button',{
  backgroundColor: '$green300',
  borderRadius: 8,
  border:0,
  padding:'4px 8px',
  width: 150,
  height: 100

})

export default function index() {
  return (
    <Button>Enviar</Button>
  )
}
