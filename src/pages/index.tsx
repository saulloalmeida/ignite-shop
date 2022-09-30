import { useKeenSlider } from "keen-slider/react";
import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";

import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";

import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style:'currency',
        currency:'BRL',
      }).format((price.unit_amount || 0) / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate:60*60*2, //2 hours /       values in seconds
  };
};

export default function index({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product className="keen-slider__slide" key={product.id}>
            <Image src={product.imageUrl} width={520} height={480} alt="" />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        );
      })}
    </HomeContainer>
  );
}
