import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee - Mug - card',
  //img: "./coffee-mug.png"
}

const App = () => {
  return (
    <>
      <ProductCard 
          product={product}
          initialValues={{
            count: 6,
            maxCount: 22,
          }}
        >
          {
            ({ reset, count, increaseBy, maxCount, isMaxCountReached }) => (
              <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
              </>
            )
          }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
