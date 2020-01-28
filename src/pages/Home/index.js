import React, { useState, useEffect } from 'react';

import {
  Container,
  ProductsSection,
  ProductsList,
  BuyButton,
  SeekButton,
  Footer,
} from './styles';

import api from '../../services/api';

import Header from '../../components/Header/index';
import Newsletter from '../../components/Newsletter/index';

import { formatPrice } from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [nextLink, setNextLink] = useState('');
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
      setNextLink(response.data.nextPage);
    }
    handleProducts();
  }, []);
  async function loadProducts() {
    const response = await api.get(`https://${nextLink}`);
    const data = response.data.products.map(item => ({
      ...item,
      oldFormated: formatPrice(item.oldPrice),
      priceFormated: formatPrice(item.price),
      valueFormated: formatPrice(item.installments.value),
    }));
    setProducts([...products, ...data]);
    setNextLink(response.data.nextPage);
  }
  return (
    <Container>
      <Header />
      <ProductsSection>
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
        <SeekButton onClick={loadProducts}>
          Ainda mais produtos aqui!
        </SeekButton>
      </ProductsSection>
      <Newsletter />
      <Footer>
        <div>
          <span>Testando habilidades em HTML, CSS e JS</span>
          <span>Linx Impulse</span>
          <span>2020</span>
        </div>
      </Footer>
    </Container>
  );
}
