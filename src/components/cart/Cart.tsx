import { useCartStore } from '../../store/cartStore'

export default function Cart() {
      const [items, removeFromCart] = useCartStore(state => [
            state.cart, state.removeFromCart
      ]);

      return (
            <div>
                  <h1>Cart</h1>

                  <ul>
                        {items.map((item) => (
                              <li key={item.id}>
                                    {item.name} - R${item.price}
                                    <button onClick={() => { removeFromCart(item.id) }}>Remove from Cart</button>
                              </li>
                        ))}
                  </ul>
            </div>
      )
}