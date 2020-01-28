import React, { useState, useEffect } from 'react';

import {
  Container,
  ProductsSection,
  ProductsList,
  BuyButton,
  SeekButton,
} from './styles';

import api from '../../services/api';

import Header from '../../components/Header/index';

import { formatPrice } from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function handleProducts() {
      const response = await api.get(
        'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
      );
      const data = response.data.products.map(item => ({
        ...item,
        oldFormated: formatPrice(item.oldPrice),
        priceFormated: formatPrice(item.price),
        valueFormated: formatPrice(item.installments.value),
      }));
      setProducts(data);
    }
    handleProducts();
  }, []);

  return (
    <Container>
      <Header />
      <ProductsSection>
        {console.log(products)}
        <h2>Sua seção especial</h2>
        <ProductsList>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt="" />
              <strong>{product.name}</strong>
              <p>{product.description}</p>
              <h4>De: {product.oldFormated}</h4>
              <span>Por: {product.priceFormated}</span>
              <h5>
                ou {product.installments.count}x de {product.valueFormated}
              </h5>
              <BuyButton>Comprar</BuyButton>
            </li>
          ))}
        </ProductsList>
        <SeekButton>Ainda mais produtos aqui!</SeekButton>
      </ProductsSection>
    </Container>
  );
}
