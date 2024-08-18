import { useCartStore } from '../../store/cartStore'

export default function AvaibleProducts() {
      const [items, addToCart] = useCartStore(state => [
            state.avaibleItems, state.addToCart
      ]);

      return (
            <div>
                  <h1>Choose a Product</h1>

                  <ul>
                        {items.map((item) => (
                              <li key={item.id}>
                                    {item.name} - R${item.price}
                                    <button onClick={() => { addToCart(item) }}>Add to Cart</button>
                              </li>
                        ))}
                  </ul>
            </div>
      )
}