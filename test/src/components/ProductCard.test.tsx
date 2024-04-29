import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductCard from "../../../src/components";
import { product1 } from "../data/products";

describe('ProductCard', () => {
  test('Debe  ostrar el componente correctamente', () => {
    const wrapper = render(
      <ProductCard product={product1}>
        {
          () => (
            <h1>Product Card</h1>
          )
        }
      </ProductCard>
    )

    expect(wrapper.asFragment()).toMatchSnapshot();

  });

  test('Debe incrementar el contador', async () => {
    const wrapper = render(
      <ProductCard product={product1} >
        {
          ({ count, increaseBy }) => (
            <>
              <h1>Product Card</h1>
              <span data-testid="span">{count}</span>
              <button data-testid="button" onClick={() => increaseBy(1)}>1</button>
            </>
          )
        }
      </ProductCard>
    )

    let tree = wrapper.asFragment();

    expect(tree).toMatchSnapshot();

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('span').textContent).toBe('1')

  });
});
