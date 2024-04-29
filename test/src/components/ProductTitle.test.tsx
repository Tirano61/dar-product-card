
import React from "react";
import { render } from "@testing-library/react";
import { ProductTitle, ProductCard } from '../../../src/components';
import { product1 } from "../data/products";



describe('ProductTitle', () => {
  test('Debe mostrar el componente correctamente con el titulo personaliado', () => { 
      const wrapper = render(
        <ProductTitle title='Custon Title' className="custom-class" />
      )

      expect( wrapper.asFragment()).toMatchSnapshot();
      
  });
  test('Debe mostrar el conponente con el nombre del producto', () => { 
    const wrapper = render(
      <ProductCard product={ product1 } >
      {
        () =>(
          <ProductTitle />
        )
      }
      </ProductCard>
    )
    
    expect( wrapper.asFragment()).toMatchSnapshot();
  })
});