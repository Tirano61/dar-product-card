# DAR-Product-Card

Este es un paquete de prueba de despliegue en NPM

### Dario Ramirez

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'dar-product-card'
```

```
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
```