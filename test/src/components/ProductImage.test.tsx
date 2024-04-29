import React from "react";
import { render } from "@testing-library/react";
import { ProductCard, ProductImage } from '../../../src/components';
import { product2 } from "../data/products";



describe('ProductImage', () => {
  test('Debe mostrar el componente correctamente con la imagen personaliado', () => {
    const wrapper = render(
      <ProductImage img="url de la imagen" />
    )

    expect(wrapper.asFragment()).toMatchSnapshot();

  });
  test('Debe mostrar el conponente con la imagenu del producto', () => {
    const wrapper = render(
      <ProductCard product={product2} >
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    )

    expect(wrapper.asFragment()).toMatchSnapshot();
  });

});