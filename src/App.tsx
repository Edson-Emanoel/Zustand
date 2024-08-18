import './App.css'
import AvaibleProducts from './components/cart/AvaibleProducts'
import Cart from './components/cart/Cart'
import Total from './components/cart/Total'

function App() {

  return (
    <div className="container mt-3">
      <Total />
      <AvaibleProducts />
      <Cart />
    </div>
  )
}

export default App
