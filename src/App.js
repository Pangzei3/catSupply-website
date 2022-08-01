import './App.css';
import Categories from './components/Categories';
import Deal from './components/Deal';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Products from './components/Products';
import React, {useState, useEffect} from 'react'
import Cart from './components/Cart';

function App() {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])

  const handleAdd = (item) => {
    if(cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  }
  const handleCartChange = (item, d) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].amount += d;
    if(arr[index].amount ===0) {arr[index].amount = 1}
    setCart([...arr]);
  }

  useEffect(() => {
    console.log('cart changed')
  }, [cart])
  return (
    <div className="App">
      {/* <Deal /> */}
      <Navbar setShow={setShow} amount={cart.length} />
      {show ? (
        <>
          <Landing />
          <Categories />,
          <Products handleAdd={handleAdd} />
        </>
      ) : (
        <Cart cart={cart} setCart={setCart} handleCartChange={handleCartChange} />
      )}
      <Footer />
    </div>
  );
}

export default App;

