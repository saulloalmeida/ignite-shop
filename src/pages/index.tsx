import Image from 'next/future/image'
import React from 'react'
import { styled } from '../styles'
import { HomeContainer, Product } from '../styles/pages/home'

import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'

export default function index() {
  return (
    <HomeContainer>
      <Product>
        <Image src={image1} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={image2} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
    )
}
